# Dokumenthanteringssystem 

En enkelsidesapplikation (SPA) som är byggd med Next, MySQL och Tailwind CSS.

Dokumenthanteringssystem är ett system för att skapa digitala dokument som sparas i en MySQL-databas. Man kan se en översiktslista med alla skapade dokument, se varje dokument som en "singlepage" och ta bort eller redigera dokument. Det finns möjlighet att se dokumentet både “live” och i redigeringsläge.



## För att köra min app lokalt


#### (Det krävs MAMP, databaskopia som importeras med hjälp av phpMyAdmin och databaskonfiguration.)


1. Klona repo

```

git clone git@github.com:OlgaGustafsson/next-mysql.git

```

2. Gå in i repokatalogen

```

cd next-mysql

```

3. Installera dev dependencies

```

npm install

```

4. Starta servern 

```

npm run dev

```

5. Öppna http://localhost:3000/ i din webbläsare.