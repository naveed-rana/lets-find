FROM python:latest
# Upgrade pip
RUN pip install --upgrade pip

## make a local directory
RUN mkdir /app

# set "app" as the working directory from which CMD, RUN, ADD references
WORKDIR /app

# now copy all the files in this directory to /code
ADD . .

# pip install the local requirements.txt
RUN pip install -r requirements.txt

CMD ["python","app.py"]
