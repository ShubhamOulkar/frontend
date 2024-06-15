# Generate a random 32-byte key
$key = New-Object byte[] 32
$rand = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$rand.GetBytes($key)

# Encode the key to base64
$base64Key = [Convert]::ToBase64String($key)

Write-Output $base64Key
