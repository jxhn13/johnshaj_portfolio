from flask import Flask
from flask_cors import CORS
from routes.home import  home_bp
from routes.chat import chat_bp
from routes.contact import contact_bp

def create_app():
    app=Flask(__name__)
    CORS(app, origins=["https://johnshaj-portfolio-cpnd.vercel.app"])
    app.register_blueprint(home_bp)
    app.register_blueprint(chat_bp)
    app.register_blueprint(contact_bp)
    return app
    
app = create_app() 
