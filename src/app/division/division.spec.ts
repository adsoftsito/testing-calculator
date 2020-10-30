import { division } from "./division"

describe('division unit tests', () => {
    
    it('Should divide 2 / 2 = 1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = division(2, 2);

        // Assert
        expect(result).toBe(1);
    })

    it('Should divide 9 / 2 = 4.5', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(9, 2);
        // Assert
        expect(result).toBe(4.5);
    })

    it('Should divide 3.0 / 0.5 = 6.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(3.0, 0.5);
        // Assert
        expect(result).toBe(6.0);
    })

    it(' Should divide 0 / 1 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = division(0, 1);
        // Assert
        expect(result).toBe(0);
    })

})