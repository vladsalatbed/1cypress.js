describe('Проверка авторизации', function () {

 
    it('Верный логин и верный пароль', function () {
        cy.visit("https://login.qa.studio/"); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет кнопки восст. пароля

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль

        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт, вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
     it('Верный логин и неверный пароль', function () {
        cy.visit("https://login.qa.studio/"); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет кнопки восст. пароля

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввели неверный пароль

        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт, вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
     it('Неверный логин и верный логин', function () {
        cy.visit("https://login.qa.studio/"); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет кнопки восст. пароля

        cy.get('#mail').type('germas@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввели неверный пароль

        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт, вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
     it('Проверка, что в логине есть @', function () {
        cy.visit("https://login.qa.studio/"); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет кнопки восст. пароля

        cy.get('#mail').type('germandolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввели неверный пароль

        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт, вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
     it('Проверка восстановления пароля', function () {
        cy.visit("https://login.qa.studio/"); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет кнопки восст. пароля

        cy.get('#forgotEmailButton').click(); // Нажал на кнопку забыли пароль

        cy.get('#mailForgot').type('germando@lnikov.ru'); // Ввели почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после авт, вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
     it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit("https://login.qa.studio/"); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет кнопки восст. пароля

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели с строчными буквами логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль

        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт, вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
})