# Roblox Game Publisher Backend

## Project Goals
- Accept a Roblox Game ID.
- Authenticate users securely through an official Roblox-supported method.
- Record successful publishing actions.
- Display a global publisher leaderboard.

## Security
- Never collect Roblox passwords or account cookies.
- Never expose access tokens or client secrets in frontend code.
- Verify authorization on the server.
- Only count actions confirmed as successful.

## Important
The backend must use supported Roblox APIs.
Changing an experience's Public/Private visibility must not be claimed
until an official supported API for that operation is verified.