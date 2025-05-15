from flask import Blueprint
from flask import request,jsonify
home_bp=Blueprint('home',__name__)


@home_bp.route("/")
def home():
    return jsonify({"message": "Hello from John’s Flask Backend!"})
