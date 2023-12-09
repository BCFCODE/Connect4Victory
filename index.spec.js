import { describe, expect, it } from "vitest";
import { whoIsWinner } from ".";

describe("Training on Connect Four | Codewars", () => {
  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "F_Yellow",
        "G_Red",
        "D_Yellow",
        "C_Red",
        "A_Yellow",
        "A_Red",
        "E_Yellow",
        "D_Red",
        "D_Yellow",
        "F_Red",
        "B_Yellow",
        "E_Red",
        "C_Yellow",
        "D_Red",
        "F_Yellow",
        "D_Red",
        "D_Yellow",
        "F_Red",
        "G_Yellow",
        "C_Red",
        "F_Yellow",
        "E_Red",
        "A_Yellow",
        "A_Red",
        "C_Yellow",
        "B_Red",
        "E_Yellow",
        "C_Red",
        "E_Yellow",
        "G_Red",
        "A_Yellow",
        "A_Red",
        "G_Yellow",
        "C_Red",
        "B_Yellow",
        "E_Red",
        "F_Yellow",
        "G_Red",
        "G_Yellow",
        "B_Red",
        "B_Yellow",
        "B_Red",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "B_Red",
        "A_Yellow",
        "F_Red",
        "G_Yellow",
        "G_Red",
        "D_Yellow",
        "G_Red",
        "F_Yellow",
        "G_Red",
        "F_Yellow",
        "E_Red",
        "E_Yellow",
        "G_Red",
        "D_Yellow",
        "C_Red",
        "B_Yellow",
        "F_Red",
        "G_Yellow",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [ 'B_Red',
  'B_Yellow',
  'C_Red',
  'A_Yellow',
  'D_Red',
  'G_Yellow',
  'F_Red',
  'G_Yellow',
  'E_Red',
  'F_Yellow',
  'A_Red',
  'D_Yellow',
  'B_Red',
  'C_Yellow',
  'G_Red',
  'A_Yellow',
  'E_Red',
  'B_Yellow',
  'F_Red',
  'E_Yellow',
  'E_Red',
  'G_Yellow',
  'C_Red',
  'A_Yellow',
  'A_Red',
  'B_Yellow',
  'A_Red' ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });

  it("should be >>> Yellow", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "C_Yellow",
        "E_Red",
        "G_Yellow",
        "B_Red",
        "D_Yellow",
        "B_Red",
        "B_Yellow",
        "G_Red",
        "C_Yellow",
        "C_Red",
        "D_Yellow",
        "F_Red",
        "E_Yellow",
        "A_Red",
        "A_Yellow",
        "G_Red",
        "A_Yellow",
        "F_Red",
        "F_Yellow",
        "D_Red",
        "B_Yellow",
        "E_Red",
        "D_Yellow",
        "A_Red",
        "G_Yellow",
        "D_Red",
        "D_Yellow",
        "C_Red",
      ],
      "Yellow",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });

  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "A_Yellow",
        "B_Red",
        "B_Yellow",
        "C_Red",
        "G_Yellow",
        "C_Red",
        "C_Yellow",
        "D_Red",
        "G_Yellow",
        "D_Red",
        "G_Yellow",
        "D_Red",
        "F_Yellow",
        "E_Red",
        "D_Yellow",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });

  it("should be >>> Yellow", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "A_Red",
        "B_Yellow",
        "A_Red",
        "B_Yellow",
        "A_Red",
        "B_Yellow",
        "G_Red",
        "B_Yellow",
      ],
      "Yellow",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });

  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "B_Red",
        "B_Yellow",
        "G_Red",
        "G_Yellow",
        "G_Red",
        "D_Yellow",
        "E_Red",
        "E_Yellow",
        "D_Red",
        "B_Yellow",
        "B_Red",
        "A_Yellow",
        "F_Red",
        "E_Yellow",
        "B_Red",
        "E_Yellow",
        "C_Red",
        "C_Yellow",
        "D_Red",
        "A_Yellow",
        "G_Red",
        "F_Yellow",
        "F_Red",
        "D_Yellow",
        "C_Red",
        "C_Yellow",
        "C_Red",
        "B_Yellow",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "D_Red",
        "F_Yellow",
        "D_Red",
        "A_Yellow",
        "E_Red",
        "C_Yellow",
        "B_Red",
        "D_Yellow",
        "B_Red",
        "A_Yellow",
        "D_Red",
        "B_Yellow",
        "C_Red",
        "E_Yellow",
        "F_Red",
        "E_Yellow",
        "B_Red",
        "B_Yellow",
        "C_Red",
        "D_Yellow",
        "D_Red",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "A_Red",
        "F_Yellow",
        "G_Red",
        "E_Yellow",
        "D_Red",
        "A_Yellow",
        "G_Red",
        "D_Yellow",
        "D_Red",
        "A_Yellow",
        "G_Red",
        "E_Yellow",
        "E_Red",
        "B_Yellow",
        "A_Red",
        "E_Yellow",
        "F_Red",
        "F_Yellow",
        "F_Red",
        "E_Yellow",
        "B_Red",
        "A_Yellow",
        "D_Red",
        "G_Yellow",
        "F_Red",
        "C_Yellow",
        "G_Red",
        "E_Yellow",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "G_Red",
        "G_Yellow",
        "B_Red",
        "C_Yellow",
        "E_Red",
        "B_Yellow",
        "D_Red",
        "F_Yellow",
        "E_Red",
        "B_Yellow",
        "F_Red",
        "C_Yellow",
        "C_Red",
        "G_Yellow",
        "B_Red",
        "A_Yellow",
        "D_Red",
        "G_Yellow",
        "C_Red",
        "F_Yellow",
        "E_Red",
        "A_Yellow",
        "C_Red",
        "A_Yellow",
        "F_Red",
        "C_Yellow",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
  it("should be >>> Red", () => {
    const [piecesPositionList, expectedResult] = [
      [
        "G_Red",
        "E_Yellow",
        "D_Red",
        "G_Yellow",
        "E_Red",
        "B_Yellow",
        "B_Red",
        "A_Yellow",
        "B_Red",
        "D_Yellow",
        "F_Red",
        "D_Yellow",
        "B_Red",
        "A_Yellow",
        "E_Red",
        "G_Yellow",
        "C_Red",
        "E_Yellow",
        "F_Red",
        "E_Yellow",
        "D_Red",
        "F_Yellow",
        "C_Red",
        "E_Yellow",
      ],
      "Red",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
  it("should be >>> Draw", () => {
    const [piecesPositionList, expectedResult] = [
      ["A_Red", "B_Yellow", "A_Red", "E_Yellow", "F_Red", "G_Yellow"],
      "Draw",
    ];
    const result = whoIsWinner(piecesPositionList);
    expect(result).toBe(expectedResult);
  });
});