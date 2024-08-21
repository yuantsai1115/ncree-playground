import {
  FirstFloorUltimateShearForce,
  firstFloorUltimateShearForceInput,
  getVuj,
} from "./formulas/9-first-floor-ultimate-shear-force";
import * as formula from "./formulas/sample-formula";

/**
 * sample-functions.ts
 */
// const result1 = formula.add(5, 3);
// const result2 = formula.multiply(4, 7);

// document.body.innerHTML = `
//   <h2>Sample Formula:</h2>
//   <p>5 + 3 = ${result1}</p>
//   <p>4 * 7 = ${result2}</p>
// `;

/**
 * 8-general-column.ts
 */


/**
 * 9-first-floor-ultimate-shear-force.ts
 */
const output = getVuj(firstFloorUltimateShearForceInput);
document.body.innerHTML = `
  <h2>表九 一樓極限層剪力 Vuj:</h2>
  <h4>Output:</h4>
  <p>SumVcoli = ${output.SumVcoli}</p>

  <h4>Input:</h4>
  <pre>{${formatObject(firstFloorUltimateShearForceInput, "  ")}}</pre>
`;

/**
 * 10-ultimate-shear-strength-new-building.ts
 */


/**
 * 11-yield-ground-acceleration-assessed-building.ts
 */


/**
 * 12-equivalent-structural-ductility-rj.ts
 */


/**
 * 13-equivalent-allowable-structural-ductility-raj.ts
 */


/**
 * 14-seismic-force-reduction-factor-fuj.ts
 */


/**
 * Helper functions, DO NOT MODIFY OR COMMENT OUT
 */
function formatObject(obj: Record<string, any>, indent: string = ''): string {
    const nextIndent = indent + '  ';
    return Object.entries(obj)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          const formattedArray = value.map(item => 
            typeof item === 'object' && item !== null
              ? `${nextIndent}{\n${formatObject(item, nextIndent + '  ')}\n${nextIndent}}`
              : `${nextIndent}${JSON.stringify(item)}`
          ).join(',\n');
          return `${key}: [\n${formattedArray}\n${indent}]`;
        } else if (typeof value === 'object' && value !== null) {
          return `${key}: {\n${formatObject(value, nextIndent)}\n${indent}}`;
        }
        return `${indent}${key}: ${JSON.stringify(value)}`;
      })
      .join(',\n');
  }
