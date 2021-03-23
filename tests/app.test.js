const request = require("supertest");
const app = require("../src/app");

describe("test app rest endpoints",()=>{
    test("It should return hello world", async() =>{
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual("Hello World!!!")
        })
})
