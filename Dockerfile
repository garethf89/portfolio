#  Create a new image from the base nodejs 9 image.
FROM node:9

COPY package.json ./

RUN npm install -g @angular/cli

RUN brew install yarn




# /*
# RUN npm install -g @angular/cli

# # Create the target directory in the imahge
# RUN mkdir -p /usr/src/app/app
# # Set the created directory as the working directory
# WORKDIR /usr/src/app
# # Copy the package.json inside the working directory
# COPY package.json /usr/src/app
# # Copy the .angular-cli.json inside the working directory
# COPY .angular-cli.json /usr/src/app
# # Install required dependencies
# RUN npm install
# # Copy the client application source files. You can use .dockerignore to exlcude files. Works just as .gitignore does.
# COPY app /usr/src/app/app
# # Healthcheck for when the Angular app is fully built
# HEALTHCHECK CMD curl --fail http://localhost || exit 1
# # Start the application. This is the same as running ng serve.
# CMD ["npm", "start"]*/