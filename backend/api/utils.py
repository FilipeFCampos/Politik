from django.core.mail import send_mail, EmailMessage
from django.conf import settings

def send_attachments(subject, message, recipient_list, json_path, attachments):
    mail = EmailMessage(subject=subject, body=message, from_email=settings.EMAIL_HOST_USER, to = recipient_list)
    mail.attach_file(json_path)
    for file in attachments:
        mail.attach_file(f"{settings.BASE_DIR}/uploads/{file}")
        
    mail.send()
    
