FROM mcr.microsoft.com/playwright:v1.59.1-jammy

RUN mkdir /app
WORKDIR /app
COPY . /app/

RUN npm isntall --force
RUN npx playwright install --with-deps