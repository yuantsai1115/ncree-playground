/**
 * Import external libraries here
 */
import { PHI_FAL_TABLE } from "../external-reference/phi-fal-table"
import { PHI_PL_TABLE } from "../external-reference/phi-pl-table"

/**
 * Shorten the type name here
 */
type ShortColumnMultiple = XYDirectionInfo.ShortColumn.ShortColumnMultiple
type RcWallMultiple = XYDirectionInfo.RcWall.RcWallMultiple
type FourSideBrickWallMultiple = XYDirectionInfo.FourSideBrickWall.FourSideBrickWallMultiple
type ThreeSideBrickWallMultiple = XYDirectionInfo.ThreeSideBrickWall.ThreeSideBrickWallMultiple
type NoSideBrickWallMultiple = XYDirectionInfo.NoSideBrickWall.NoSideBrickWallMultiple
type GeneralColumnMultiple = XYDirectionInfo.GeneralColumn.GeneralColumnMultiple

/**
 * Define new types here if needed
 */
export namespace FirstFloorUltimateShearForce {
    export type Input = {
        shortColumns: ShortColumnMultiple
        rcWalls: RcWallMultiple
        fourSideBrickWalls: FourSideBrickWallMultiple
        threeSideBrickWalls: ThreeSideBrickWallMultiple
        noSideBrickWalls: NoSideBrickWallMultiple
        generalColumns: GeneralColumnMultiple
    }

    export type Output = {
        SumVcoli: number
    }
}

/**
 * Define sample inputs here
 */
export const firstFloorUltimateShearForceInput: FirstFloorUltimateShearForce.Input = {
    shortColumns: [
        {
            name: '短柱1',
            Bsc: 0,
            Hsc: 0,
            Hsl: 0,
            No: 0,
            Num: 0,
            S: 0,
            Nsci: 0
        }
    ],
    rcWalls: [
        {
            name: 'RC牆1',
            Tb: 0,
            Wb: 0,
            Hb: 0,
            No: 0,
            Num: 0,
            S: 0,
            Nswi: 0
        }
    ],
    fourSideBrickWalls: [
        {
            name: '四邊圍束磚牆1',
            Tb: 0,
            Wb: 0,
            Hb: 0,
            Nbw4i: 0
        }
    ],
    threeSideBrickWalls: [
        {
            name: '三邊圍束磚牆1',
            Tb: 0,
            Wb: 0,
            Hb: 0,
            Nbw3i: 0
        }
    ],
    noSideBrickWalls: [
        {
            name: '無邊圍束磚牆1',
            Tb: 0,
            Wb: 0,
            Hb: 0,
            Nbw2i: 0
        }
    ],
    generalColumns: [
        {
            name: '一般柱1',
            Bc: 0,
            Hc: 0,
            Lo: 0,
            No_1: 0,
            Num_1: 0,
            No_2: 0,
            Num_2: 0,
            H1: 0,
            No: 0,
            Num: 0,
            S: 0,
            Nci: 0
        }
    ]
}

/**
 * Write actual functions here
 */
export function getVuj(input: FirstFloorUltimateShearForce.Input): FirstFloorUltimateShearForce.Output {
    const output: FirstFloorUltimateShearForce.Output = {
        SumVcoli: 2
    }
    // Your code here
    // e.g. output.SumVcoli = ....
    return output
}


/**
 * 公式1
 * @returns 立面修正係數
 */
// function getphifa(input: !!!這邊要把定性表的立面對稱性讀進來!!! ): number {
//     phifa1 = (phi_fal_TABLE.find((phifal) => phifal.No === input.(立面的良/尚可/不良))?.Area ?? 0)
// 	story = !!!基本資訊的樓層資料!!!
//     phifa  = phifal - (( phifal - 1 ) * ( 7 - story ) / 5)
//     return phifa
// }

/**
 * 公式2
 * @returns 平面修正係數
 */
// function getphipl(input: !!!這邊要把定性表的平面對稱性讀進來!!! ): number {
//     phip1 = (phi_pl_TABLE.find((phifal) => phipl.No === input.(平面的良/尚可/不良))?.Area ?? 0)
//     return phipl
// }

/**
 * 公式3
 * @returns  一樓極限層剪力 Vuj
 */
// function getSingleUltimateStrength(
//     inputGC : GeneralColumnOutput,
//     inputSC : ShortColumnOutput,
//     inputRCW: RcWallOutput,
//     inputBW4: FourSideBrickWallOutput,
//     inputBW3: ThreeSideBrickWallOutput,
//     inputBW2: NoSideBrickWallOutput,
//     referenceData: ReferenceData): number {
//     //導入 極限強度總和
//     const sumVcoli  = inputGC.SumVcoli
//     const sumVscoli = inputSC.SumVscoli
//     const sumVswi   = inputRCW.SumVswi
//     const sumVbw4i  = inputBW4.SumVbw4i
//     const sumVbw3i  = inputBW3.SumVbw3i
//     const sumVbw2i  = inputBW2.SumVbw2i
//     //導入phi
//     const phi_fa = getphifa ()  !!立面的良/尚可/不良
//     const phi_pl = getphipl ()  !!平面的良/尚可/不良

//     //j=1 
//     const Cvsj_1 = 0.85
//     const Cvbj_1 = 0.95
//     const Cvcj_1 = 0.65
//     Vuj_1 = (Cvcj_1 * (sumVcoli) + Cvsj_1 * ( sumVscoli + sumVswi) + Cvbj_1 *(sumVbw4i +sumVbw3i +sumVbw2i) ) * phi_fa * phi_pl

//     //j=2 
//     const Cvsj_2 = 0
//     const Cvbj_2 = 0.85
//     const Cvcj_2 = 0.95
//     Vuj_2 = (Cvcj_2 * (sumVcoli) + Cvsj_2 * ( sumVscoli + sumVswi) + Cvbj_2 *(sumVbw4i +sumVbw3i +sumVbw2i) ) * phi_fa * phi_pl

//     //j=3 
//     const Cvsj_3 = 0
//     const Cvbj_3 = 0
//     const Cvcj_3 = 1
//     Vuj_3 = (Cvcj_3 * (sumVcoli) + Cvsj_3 * ( sumVscoli + sumVswi) + Cvbj_3 *(sumVbw4i +sumVbw3i +sumVbw2i) ) * phi_fa * phi_pl


//     return Vuj_1 , Vuj_2 , Vuj_3
