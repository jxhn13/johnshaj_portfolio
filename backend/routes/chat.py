from flask import Blueprint
from flask import request,jsonify

chat_bp=Blueprint('chat',__name__)



@chat_bp.route("/chat")
def chat():
    user_input = request.json.get("message")
    
    return jsonify({"reply": f"AI reply to: '{user_input}'"})
        