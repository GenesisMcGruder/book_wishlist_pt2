#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
import random
import datetime

# Remote library imports
from faker import Faker
import requests

# Local imports
from app import app
from models import db, User, Book, Wishlist, Review

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Deleting data...')
        User.query.delete()
        Book.query.delete()
        Wishlist.query.delete()
        Review.query.delete()
        print("Starting seed...")
        users = []
        usernames = []

        for i in range(10):
            username = fake.first_name()
            counter = 1
            while username in usernames:
                username = f"{fake.first_name()}{counter}"
                counter += 1
            usernames.append(username)

            user = User(
                email= fake.unique.email(),
                username=username,
                bio=fake.paragraph(nb_sentences=2)
            )

            user.password_hash = user.username + 'password'

            users.append(user)

        db.session.add_all(users)
        db.session.commit() 

        
