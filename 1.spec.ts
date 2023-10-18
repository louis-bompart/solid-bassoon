describe("My First Test", () => {
  it("will fail the first time", () => {
    expect(process.env.FIRST_TIME).to.be("true");
    process.env.FIRST_TIME= "true";
  });
});
