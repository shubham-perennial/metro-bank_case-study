const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../dist/index").default;

const Status = require("../../dist/utility/statusCode");

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe("all rest apis", () => {
  describe("all get methods", () => {
    it("get profile by id", async () => {
      const result = await chai.request(app).get("/profiles/:id");
      result.should.have.status(203);
    });

    it("get all services", async () => {
      const result = await chai.request(app).get("/services/getservices");
      result.should.have.status(200);
    });

    it("get all transactions", async () => {
      const result = await chai.request(app).get("/transactions");
      result.should.have.status(200);
    });
  });

  describe("all post methods", () => {
    it("create user req", async () => {
      const result = await chai.request(app).post("/users");
      result.should.have.status(203);
    });

    it("login user req", async () => {
      const result = await chai.request(app).post("/users/login");
      result.should.have.status(203);
    });

    it("add services req", async () => {
      const result = await chai.request(app).post("/services");
      result.should.have.status(203);
    });

    it("create user profile", async () => {
      const result = await chai.request(app).post("/profiles");
      result.should.have.status(203);
    });

    it("file upload req", async () => {
      const result = await chai.request(app).post("/transactions/uploadfile/");
      result.should.have.status(203);
    });
  });
});
