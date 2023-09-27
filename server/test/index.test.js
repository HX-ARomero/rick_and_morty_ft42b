const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {

    const char1 = { id: 1, name: "Rick" };
    const char2 = { id: 2, name: "Morty" };

    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (
                await agent.get('/rickandmorty/character/1')
            ).body;
            // console.log(response);
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        })
        it("Si hay un error responde con status: 500", async () => {
            await agent
                .get('/rickandmorty/character/123456789')
                .expect(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("Credenciales correctas, access: true", async () => {
            const response = await agent
                .get("/rickandmorty/login?email=ejemplo@gmail.com&password=123456");
            // console.log(response.body);
            expect(response.body.access).toBeTruthy();
        })
        it("Credenciales incorrectas, access: false", async () => {
            const response = await agent
                .get("/rickandmorty/login?email=ejemplerror@gmail.com&password=123456");
            // console.log(response.body);
            expect(response.body.access).toBeFalsy();
        })
    })

    describe("POST /rickandmorty/fav", () => {
        it("Devuelve un JSON con lo enviado por body", async () => {
            const response = await agent
                .post("/rickandmorty/fav")
                .send(char1);
            // expect(response.body).toEqual([char1]);
            // console.log(response.body);
            expect(response.body).toContainEqual(char1);
        })
        it("Devuelve un JSON con lo enviado por body inculyendo los previamente posteados", async () => {
            const response = await agent
                .post("/rickandmorty/fav")
                .send(char2);
            // expect(response.body).toEqual([char1]);
            // console.log(response.body);
            expect(response.body).toContainEqual(char1);
            expect(response.body).toContainEqual(char2);
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si no hay personaje a eliminar devuelve array de farovitor", async () => {
            const response = await agent
                .delete("/rickandmorty/fav/5")
            expect(response.body).toContainEqual(char1);
            expect(response.body).toContainEqual(char2);
        })
        it("Si el personaje a eliminar está en favoritos, lo elimina", async () => {
            const response = await agent
                .delete("/rickandmorty/fav/1")
            expect(response.body).not.toContainEqual(char1);
            expect(response.body).toContainEqual(char2);
        })
    })

})