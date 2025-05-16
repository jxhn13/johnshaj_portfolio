from flask import Blueprint, request, jsonify
import smtplib
from email.message import EmailMessage

contact_bp = Blueprint('contact', __name__)

EMAIL_ADDRESS = "johnshajan007@gmail.com"
EMAIL_PASSWORD = "umtjtspoxkxvivvj" 

@contact_bp.route("/contact", methods=["POST", "OPTIONS"])
def contact():
    if request.method == "OPTIONS":
        return jsonify({"message": "Preflight success"}), 200
    
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    
    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    try:
        msg = EmailMessage()
        msg["Subject"] = "New Contact Message from Portfolio"
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = EMAIL_ADDRESS
        msg.set_content(f"From: {name} <{email}>\n\n{message}")

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return jsonify({"success": True}), 200
    except Exception as e:
        print("Error sending email:", e)
        return jsonify({"error": "Failed to send message"}), 500
