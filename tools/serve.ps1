# Server statik ringkas untuk uji Jadian di komputer (tanpa Node.js).
# Guna: powershell -ExecutionPolicy Bypass -File tools\serve.ps1 [-Port 8080]
# Kemudian buka http://localhost:8080/www/ dalam browser.
param([int]$Port = 8080, [string]$Root = (Split-Path -Parent $PSScriptRoot))
$mime = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='text/javascript; charset=utf-8';
  '.json'='application/json'; '.webmanifest'='application/manifest+json'; '.svg'='image/svg+xml'; '.png'='image/png';
  '.jpg'='image/jpeg'; '.woff2'='font/woff2'; '.ico'='image/x-icon'; '.txt'='text/plain; charset=utf-8' }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Jadian: http://localhost:$Port/www/  (Ctrl+C untuk berhenti)"
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
    # Laluan simpan untuk resources/icon-maker.html: POST /__save/<laluan>. Hanya dalam resources/ atau www/assets/.
    if ($ctx.Request.HttpMethod -eq 'POST' -and $rel.StartsWith('__save/')) {
      $target = $rel.Substring(7)
      $full = [IO.Path]::GetFullPath((Join-Path $Root $target))
      $okDirs = @((Join-Path $Root 'resources'), (Join-Path $Root 'www\assets')) | ForEach-Object { [IO.Path]::GetFullPath($_) }
      if (($okDirs | Where-Object { $full.StartsWith($_) }) -and $full.EndsWith('.png')) {
        $ms = New-Object IO.MemoryStream; $ctx.Request.InputStream.CopyTo($ms); [IO.File]::WriteAllBytes($full, $ms.ToArray())
        $ctx.Response.StatusCode = 200
      } else { $ctx.Response.StatusCode = 403 }
      continue
    }
    if ($rel -eq '' ) { $rel = 'www/' }
    $path = Join-Path $Root $rel
    if ((Test-Path $path -PathType Container)) { $path = Join-Path $path 'index.html' }
    $full = [IO.Path]::GetFullPath($path)
    if (-not $full.StartsWith([IO.Path]::GetFullPath($Root)) -or -not (Test-Path $full -PathType Leaf)) {
      $ctx.Response.StatusCode = 404; $b = [Text.Encoding]::UTF8.GetBytes('404'); $ctx.Response.OutputStream.Write($b, 0, $b.Length)
    } else {
      $ext = [IO.Path]::GetExtension($full).ToLower()
      $ctx.Response.ContentType = $(if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' })
      $ctx.Response.Headers.Add('Cache-Control', 'no-store')
      $bytes = [IO.File]::ReadAllBytes($full)
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
  } catch {} finally { $ctx.Response.Close() }
}
