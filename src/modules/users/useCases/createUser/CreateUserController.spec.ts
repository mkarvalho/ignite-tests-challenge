import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase"


let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository

describe("Create User Controller", () => {

  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository)
  })

  it("should create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "any_name",
      email: "any_email",
      password: "any_password"
    })
    expect(user).toHaveProperty("id")
  })
})
