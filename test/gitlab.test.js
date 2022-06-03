let expect = require("chai").expect;
let axios = require("axios");

const LOCALHOST = "http://localhost:3001/hunt/gitlab";

describe("Status and content", function () {
  it("status", function (done) {
    axios.get(`${LOCALHOST}/projects?field=tetris`).then((result) => {
      expect(result.status).to.equal("200");
    });
    done();
  });

  it("content", function (done) {
    axios.get(`${LOCALHOST}/projects?field=tetris`).then((result) => {
      expect(result.data).to.be.a("array");
    });
    done();
  });
});
