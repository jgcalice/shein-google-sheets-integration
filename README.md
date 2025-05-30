# 📊 Shein API Google Sheets Integration

This project aims to integrate the Shein API with Google Sheets so that marketplace sellers can automate the extraction of sales and order data without relying on manual processes via the Shein portal.

---

## 🔧 What This Project Does

- Generates the authorization link to retrieve a `tmp_auth_code` from Shein
- Exchanges the temporary code for an `access_token` using signature-based authentication (`app_key` + `app_secret`)
- Makes authenticated requests to fetch Shein order data
- Logs all API responses to help with debugging
- Organizes code in modular, reusable, and secure scripts

---

## 📁 Project Structure

- `shein-auth.gs` – Handles generation of the authorization URL
- `shein-token.gs` – Handles signing and token exchange logic
- `shein-orders.gs` – Handles authenticated order retrieval

---

## ▶️ Requirements

- A registered seller account on the [Shein Open Platform](https://open.sheincorp.com)
- An approved App with AppKey and AppSecret
- A connected Google Apps Script project linked to a Google Sheet
- (Optional) Git + Node.js with `clasp` for local development

---

## 📌 Notes

- Shein does not use standard OAuth2. Authentication is based on SHA256 signature plus required parameters (`method`, `timestamp`, etc.)
- The `access_token` has a short lifespan and should be refreshed manually or programmatically
- All requests go through `https://openapi-sg.sheincorp.com/router/rest`

---

## ✅ Next Steps

- Store the `access_token` securely using `PropertiesService`
- Automatically populate Google Sheets cells with order data
- Schedule automatic daily executions using Triggers

---

Created by [João Guilherme B. Calice](https://github.com/jgcalice) 🚀
