step 1 : install python (add to path)
step 2 : install pip
step 3 : install python pillow
step 4 : run "py manage.py createsuperuser"
Note: AT this point it will give some warnings you can resolve it by step 5
step 5 :py manage.py migrate
step 6: again run step 4 and create superuser 
NOTE : the password is invisible just hit enter when you done 
step 7: Run "python -m pip install -r requirements.txt"
step 8: Run these one by one "py manage.py makemigrations
py manage.py migrate
py manage.py runserver"
step 9:paste this on browser "http://127.0.0.1:8000/"
step 10: Now your project is live if u wish to stop the host you can press ctrl+c on terminal 