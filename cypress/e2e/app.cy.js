describe("Todo App E2E", () => {
  it("loads the app and allows interacting with the add todo form", () => {
    cy.visit("/");

    // wait until data fetched
    cy.wait(3000);

    // Check if input exists
    cy.get('input[placeholder="Tambah tugas baru"]').should("be.visible");

    // Type a new todo
    cy.get('input[placeholder="Tambah tugas baru"]').type(
      "Belajar Cypress E2E",
    );

    // Click the submit button
    cy.get('form#add button[type="submit"]').click();

    // Verify the page responded by checking if the input is cleared
    cy.get('input[placeholder="Tambah tugas baru"]').should("have.value", "");

    // Verify the todo is added to the list
    cy.get("section#todo-list div:last-child").should(
      "contain",
      "Belajar Cypress E2E",
    );

    // Remove the todo
    cy.get("section#todo-list div:last-child button:last-child").click();

    // Verify the todo is removed from the list
    cy.get("section#todo-list div:last-child").should(
      "not.contain",
      "Belajar Cypress E2E",
    );
  });
});
