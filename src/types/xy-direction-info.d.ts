declare namespace XYDirectionInfo {
    type General = {
        name: string
    }
    /**
     * 表三、短柱
     */
    namespace ShortColumn {
        // Input
        type ShortColumnSingle = General & {
            Bsc: number //短柱寬
            Hsc: number //短柱深
            Hsl: number //短柱淨長
            No: number //箍筋號數
            Num: number //箍筋根數
            S: number //箍筋間距
            Nsci: number //短柱根數
        }

        type ShortColumnMultiple = ShortColumnSingle[]

        // Output
        type ShortColumnOutput = {
            // Av: number //箍筋總斷面積
            // D: number //有效深度
            // Vsui: number //單一短柱極限強度
            SumVscoli: number //短柱極限強度總和
        }
    }

    /**
     * 表四、RC牆
     */
    namespace RcWall {
        // Input
        type RcWallSingle = General & {
            Tb: number //牆厚度
            Wb: number //長度
            Hb: number //高度
            No: number //箍筋號數
            Num: number //箍筋排數
            S: number //箍筋間距
            Nswi: number //數量
        }

        type RcWallMultiple = RcWallSingle[]

        // Output
        type RcWallOutput = {
            // Av: number //RC牆鋼筋總面積
            // Psw: number //RC牆鋼筋比
            // Vswi: number //單片RC牆極限強度
            SumVswi: number //RC牆極限強度總和
        }
    }

    /**
     * 表五、四邊圍束磚牆
     */
    namespace FourSideBrickWall {
        // Input
        type FourSideBrickWallSingle = General & {
            Tb: number //牆厚度
            Wb: number //長度
            Hb: number //高度
            Nbw4i: number //數量
        }

        type FourSideBrickWallMultiple = FourSideBrickWallSingle[]

        // Output
        type FourSideBrickWallOutput = {
            // tf: number //紅磚介面 磨擦強度
            // fmbt: number //紅磚介面 劈裂強度
            // fbt: number //灰縫 劈裂強度
            // H1: number //H1
            // Hb: number //內砌紅磚牆有效淨高度
            // Vbw4i: number //單片四邊圍束磚牆極限強度
            SumVbw4i: number //四邊圍束磚牆極限強度總和
        }
    }

    /**
     * 表六、三邊圍束磚牆
     */
    namespace ThreeSideBrickWall {
        // Input
        type ThreeSideBrickWallSingle = General & {
            Tb: number //牆厚度
            Wb: number //長度
            Hb: number //高度
            Nbw3i: number //數量
        }

        type ThreeSideBrickWallMultiple = ThreeSideBrickWallSingle[]

        // Output
        type ThreeSideBrickWallOutput = {
            // tf: number //紅磚介面 磨擦強度
            // fmbt: number //紅磚介面 劈裂強度
            // H2: number //H2
            // Vbw3i: number //單片三邊圍束磚牆極限強度
            SumVbw3i: number //三邊圍束磚牆極限強度總和
        }
    }

    /**
     * 表七、無側邊圍束磚牆
     */
    namespace NoSideBrickWall {
        // Input
        type NoSideBrickWallSingle = General & {
            Tb: number //牆厚度
            Wb: number //長度
            Hb: number //高度
            Nbw2i: number //數量
        }

        type NoSideBrickWallMultiple = NoSideBrickWallSingle[]

        // Output
        type NoSideBrickWallOutput = {
            // tf: number //紅磚介面 磨擦強度
            // Vbw2i: number //單片無側邊圍束磚牆極限強度
            SumVbw2i: number //無側邊圍束磚牆極限強度總和
        }
    }

    /**
     * 表八、一般柱
     */
    namespace GeneralColumn {
        // Input
        // NOTES: 可以輸入鋼筋比也可輸入鋼筋號數與隻數，最後要的只有鋼筋比(Lo)
        type GeneralColumnSingle = General & {
            Bc: number //柱寬
            Hc: number //柱深
            Lo: number //鋼筋比
            No_1?: number //主筋號數(X向)
            Num_1?: number //主筋支數(X向)
            No_2?: number //主筋號數(Y向)
            Num_2?: number //主筋支數(Y向
            H1: number //柱淨高
            No: number //箍筋號數
            Num: number //箍筋根數
            S: number //箍筋間距
            Nci: number //柱根數
        }

        type GeneralColumnMultiple = GeneralColumnSingle[]

        // Output
        type GeneralColumnOutput = {
            Bc: number //柱寬
            Hc: number //柱深
            Lo: number //鋼筋比
            H1: number //柱淨高
            No: number //箍筋號數
            Num: number //箍筋根數
            S: number //箍筋間距
            Nci: number //柱根數
            Vcoli: number //單一柱極限強度
            SumVcoli: number //柱極限強度總和
        }
    }

    /**
     * 表八、牆量比
     */
    namespace WallQuantityRatio {
        // Input
        type RcWallQuantityRatioSingle = General & {
            Tb: number //RC牆 牆厚
            Wb: number //RC牆 牆長
            Nswi: number //RC牆 數量
        }
        type BrickWallQuantityRatioSingle = General & {
            Tb: number //磚牆 牆厚
            Wb: number //磚牆 牆長
            Nbw4i: number //磚牆 數量
        }

        type RcWallQuantityRatioMultiple = RcWallQuantityRatioSingle[]
        type BrickWallQuantityRatioMultiple = BrickWallQuantityRatioSingle[]

        // Output
        type WallQuantityRatioOutput = {
            Rw: number //牆量比
        }
    }
}
