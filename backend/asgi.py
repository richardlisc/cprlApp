"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
import socketio

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_asgi_application()
sio = socketio.AsyncServer()

application = socketio.WSGIApp(sio, application)



@sio.event
def connect(sid, environ):
    print('connect ', sid)