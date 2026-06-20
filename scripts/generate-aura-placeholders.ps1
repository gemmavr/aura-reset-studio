Add-Type -AssemblyName System.Drawing

$OutDir = Join-Path (Get-Location) "public/images/aura"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$ivory = [System.Drawing.ColorTranslator]::FromHtml("#F7F3EB")
$linen = [System.Drawing.ColorTranslator]::FromHtml("#FCFAF6")
$sand = [System.Drawing.ColorTranslator]::FromHtml("#DDC9AD")
$clay = [System.Drawing.ColorTranslator]::FromHtml("#CBB7A3")
$teal = [System.Drawing.ColorTranslator]::FromHtml("#438E91")
$espresso = [System.Drawing.ColorTranslator]::FromHtml("#173E40")
$halo = [System.Drawing.ColorTranslator]::FromHtml("#F0B45A")

function Save-Jpeg($bitmap, $name) {
  $path = Join-Path $OutDir $name
  $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 88L)
  $bitmap.Save($path, $encoder, $params)
  $bitmap.Dispose()
}

function New-Canvas($w, $h, $top, $bottom) {
  $bmp = New-Object System.Drawing.Bitmap($w, $h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Rectangle(0, 0, $w, $h)),
    $top,
    $bottom,
    [System.Drawing.Drawing2D.LinearGradientMode]::Vertical
  )
  $g.FillRectangle($brush, 0, 0, $w, $h)
  $brush.Dispose()
  return @($bmp, $g)
}

function Add-Line($g, $x1, $y1, $x2, $y2, $color, $width = 3, $alpha = 255) {
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb($alpha, $color), $width)
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $g.DrawLine($pen, $x1, $y1, $x2, $y2)
  $pen.Dispose()
}

function Add-Ellipse($g, $x, $y, $w, $h, $color, $alpha = 255) {
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, $color))
  $g.FillEllipse($brush, $x, $y, $w, $h)
  $brush.Dispose()
}

function Add-Rect($g, $x, $y, $w, $h, $color, $alpha = 255) {
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, $color))
  $g.FillRectangle($brush, $x, $y, $w, $h)
  $brush.Dispose()
}

# Hero: woman pausing near the sea in morning light, abstract and local.
$c = New-Canvas 1200 1500 $ivory $linen; $bmp = $c[0]; $g = $c[1]
Add-Ellipse $g 780 170 250 250 $clay 190
Add-Rect $g 0 860 1200 640 $teal 115
for ($i = 0; $i -lt 12; $i++) { Add-Line $g 80 (910 + $i * 42) 1120 (900 + $i * 42) $ivory 2 55 }
Add-Ellipse $g 445 530 170 170 $espresso 220
Add-Ellipse $g 375 665 320 420 $espresso 220
Add-Ellipse $g 410 655 250 210 $linen 70
$g.Dispose(); Save-Jpeg $bmp "aura-hero-sea-woman.jpg"

# Wall: cream sunlit wall with soft palm shadows.
$c = New-Canvas 1200 900 $ivory $linen; $bmp = $c[0]; $g = $c[1]
for ($i = 0; $i -lt 8; $i++) { Add-Line $g (820 + $i * 18) -50 (360 + $i * 50) 870 $teal 16 42 }
for ($i = 0; $i -lt 10; $i++) { Add-Line $g 650 (130 + $i * 14) (1030 - $i * 18) (60 + $i * 58) $espresso 8 30 }
Add-Ellipse $g 100 650 180 180 $clay 60
$g.Dispose(); Save-Jpeg $bmp "aura-wall-palm-shadow.jpg"

# Journal ritual: notebook, ceramics, linen, lived in objects.
$c = New-Canvas 1100 900 $sand $ivory; $bmp = $c[0]; $g = $c[1]
for ($i = 0; $i -lt 18; $i++) { Add-Rect $g 0 ($i * 52) 1100 2 $ivory 90 }
Add-Rect $g 210 160 500 560 $ivory 235
Add-Line $g 265 260 640 260 $clay 2 150
Add-Line $g 265 330 640 330 $clay 2 150
Add-Line $g 265 400 600 400 $clay 2 150
Add-Ellipse $g 760 250 190 190 $espresso 220
Add-Ellipse $g 800 290 110 110 $clay 230
Add-Line $g 205 735 730 735 $teal 4 80
$g.Dispose(); Save-Jpeg $bmp "aura-journal-ritual.jpg"

# Sunset circle: intimate beach ritual with candles, no posing.
$c = New-Canvas 1100 1400 $clay $espresso; $bmp = $c[0]; $g = $c[1]
Add-Rect $g 0 360 1100 220 $ivory 115
Add-Rect $g 0 595 1100 805 $teal 85
for ($i = 0; $i -lt 4; $i++) {
  $x = 230 + $i * 180
  Add-Ellipse $g $x 760 58 58 $espresso 220
  Add-Ellipse $g ($x - 30) 825 120 150 $espresso 220
}
for ($i = 0; $i -lt 7; $i++) { Add-Ellipse $g (170 + $i * 115) (1110 + (($i % 2) * 28)) 24 44 $ivory 210 }
$g.Dispose(); Save-Jpeg $bmp "aura-sunset-circle.jpg"

# Evening community: warm table, candles, local gathering.
$c = New-Canvas 1200 850 $espresso $teal; $bmp = $c[0]; $g = $c[1]
for ($i = 0; $i -lt 5; $i++) { Add-Ellipse $g (120 + $i * 210) (180 + (($i % 2) * 80)) 170 170 $clay 70 }
Add-Ellipse $g 210 430 780 220 $sand 160
for ($i = 0; $i -lt 6; $i++) { Add-Line $g (260 + $i * 110) 520 (310 + $i * 100) 585 $ivory 5 210 }
$g.Dispose(); Save-Jpeg $bmp "aura-evening-community.jpg"

# Detail: drink, card, ceramic object, no quote card.
$c = New-Canvas 1000 850 $ivory $sand; $bmp = $c[0]; $g = $c[1]
Add-Rect $g 170 170 440 300 $ivory 240
Add-Line $g 230 260 530 260 $clay 2 135
Add-Line $g 230 320 500 320 $clay 2 120
Add-Line $g 230 380 560 380 $clay 2 110
Add-Ellipse $g 650 260 190 190 $teal 145
Add-Ellipse $g 697 305 96 96 $clay 160
Add-Line $g 705 360 755 670 $espresso 6 190
Add-Line $g 620 680 835 680 $espresso 5 190
$g.Dispose(); Save-Jpeg $bmp "aura-detail-drink-card.jpg"

# Brand object: subtle Atlantic Teal physical detail for future card, tote, strap or journal cover.
$c = New-Canvas 1000 850 $ivory $linen; $bmp = $c[0]; $g = $c[1]
Add-Rect $g 210 150 460 560 $teal 225
Add-Rect $g 255 210 370 2 $ivory 120
Add-Rect $g 255 270 290 2 $ivory 105
Add-Ellipse $g 690 390 150 150 $clay 120
Add-Line $g 150 735 850 735 $espresso 2 95
$g.Dispose(); Save-Jpeg $bmp "aura-brand-object.jpg"

# Gemma placeholder: non stock portrait placeholder, no old naming.
$c = New-Canvas 1000 1250 $ivory $linen; $bmp = $c[0]; $g = $c[1]
Add-Ellipse $g 310 170 380 380 $teal 170
Add-Ellipse $g 225 520 550 560 $espresso 210
Add-Ellipse $g 340 250 320 320 $clay 60
$g.Dispose(); Save-Jpeg $bmp "gemma-portrait.jpg"
