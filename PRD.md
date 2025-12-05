PRODUCT REQUIREMENT DOCUMENT

1. Product Summary (What are you building?)


The platform is a digital wallet where users can fund money and get two virtual cards (Naira card + Dollar card) for online payments.


2. Core Features (What must the system do?)

Only include the critical features:

A. User account

Signup + login

Basic KYC verification


B. Wallet

Fund wallet (bank transfer / card payment)

View balance (NGN & USD)


C. Virtual Cards

Issue Naira virtual card

Issue Dollar virtual card

Show card number, expiry, CVV

Freeze / unfreeze


D. Transactions

Transaction history

Card transactions

Wallet funding logs


E. Withdrawals

Withdraw from wallet to bank


3. User Flow (How users use the system)

Write it in 4–5 steps:

User Flow 1: Create Account

User signs up → Verifies phone/email → Enters KYC → Dashboard opens.

User Flow 2: Fund Wallet

User selects “Add Money” → Transfers to provided account or pays with card → Wallet updates automatically.

User Flow 3: Get Virtual Cards

User clicks “Create Card” → System creates Naira & Dollar cards → Cards appear in dashboard.

User Flow 4: Use Cards

User uses card for online payments → Card transactions appear.

User Flow 5: Withdraw

User withdraws → API sends money to bank.


4. Technical Requirements (Backend & Security)

Just keep the important ones:

Backend

Must integrate with virtual card API (Flutterwave / Strowallet / Monnify)

Must generate wallet accounts

Must store cards securely


Security

HTTPS

Encrypted card details

Don’t store CVV permanently

JWT authentication



5. Success Metrics (How you know it works)

Only add the 3 most important:

Number of active wallet users

Number of issued virtual cards

Total amount funded monthly




