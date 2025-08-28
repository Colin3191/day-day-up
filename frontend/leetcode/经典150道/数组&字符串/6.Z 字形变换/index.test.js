import { describe, test, expect } from 'vitest';
import convert from './index.js';

describe('6. Z 字形变换', () => {
    test('示例1: "PAYPALISHIRING", numRows = 3', () => {
        expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    });

    test('示例2: "PAYPALISHIRING", numRows = 4', () => {
        expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
    });

    test('示例3: "A", numRows = 1', () => {
        expect(convert("A", 1)).toBe("A");
    });

    test('边界情况: numRows = 1', () => {
        expect(convert("ABCDEF", 1)).toBe("ABCDEF");
    });

    test('边界情况: numRows >= 字符串长度', () => {
        expect(convert("ABC", 5)).toBe("ABC");
        expect(convert("HELLO", 10)).toBe("HELLO");
    });

    test('numRows = 2', () => {
        expect(convert("PAYPALISHIRING", 2)).toBe("PYAIHRNAPLSIIG");
    });

    test('较短字符串', () => {
        expect(convert("AB", 2)).toBe("AB");
        expect(convert("ABC", 2)).toBe("ACB");
    });

    test('包含特殊字符', () => {
        expect(convert("A,B.C", 3)).toBe("AC,.B");
    });

    test('空字符串', () => {
        expect(convert("", 1)).toBe("");
        expect(convert("", 3)).toBe("");
    });

    test('单个字符', () => {
        expect(convert("X", 3)).toBe("X");
    });

    test('验证Z字形模式: numRows = 5', () => {
        // 对于较长的字符串验证Z字形变换
        const input = "ABCDEFGHIJKLMNOP";
        const result = convert(input, 5);
        // 手工验证：
        // A     I
        // B   H J   P
        // C G   K O
        // D F   L N
        // E     M
        // 结果应该是: AIBHJPCGKODFLNEM
        expect(result).toBe("AIBHJPCGKODFLNEM");
    });
});
