// DottedSeparatorコンポーネントのプロパティを定義するインターフェース
interface DottedSeparatorProps {
  // 追加のCSSクラスを適用するためのオプショナルなプロパティ
  className?: string;
  // ドットの色を指定するオプショナルなプロパティ
  color?: string;
  // セパレーターの高さ（太さ）を指定するオプショナルなプロパティ
  height?: string;
  // 各ドットのサイズを指定するオプショナルなプロパティ
  dotSize?: string;
  // ドット間の間隔を指定するオプショナルなプロパティ
  gapSize?: string;
  // セパレーターの方向（水平または垂直）を指定するオプショナルなプロパティ
  direction?: "horizontal" | "vertical";
}
import { cn } from "@/lib/utils";

// DottedSeparatorコンポーネントのデフォルトエクスポート
export default function DottedSeparator({
  className,
  color = "#d4d4d8", // デフォルトの色
  height = "2px", // デフォルトの高さ
  dotSize = "2px", // デフォルトのドットサイズ
  gapSize = "6px", // デフォルトの間隔サイズ
  direction = "horizontal", // デフォルトの方向
}: DottedSeparatorProps) {
  // 方向が水平かどうかを判定するフラグ
  const isHorizontal = direction === "horizontal";
  return (
    // 外側のコンテナdiv
    <div
      className={cn(
        // isHorizontalフラグに基づいてクラスを動的に設定
        isHorizontal
          ? "w-full flex items-center" // 水平の場合：幅いっぱい、フレックスボックスで中央揃え
          : "h-full flex flex-col items-center", // 垂直の場合：高さいっぱい、フレックスボックス（縦方向）で中央揃え
        className // propsから渡された追加クラス
      )}
    >
      {/* 実際の点線を描画する内側のdiv */}
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          // isHorizontalフラグに基づいて幅と高さを設定
          width: isHorizontal ? "100%" : height, // 水平なら幅100%、垂直なら指定された高さ（太さ）
          height: isHorizontal ? height : "100%", // 水平なら指定された高さ（太さ）、垂直なら高さ100%
          // 背景画像を使ってドットを生成
          // radial-gradientで円形のグラデーションを作成し、25%まで色をつけ、残りを透明にすることで円（ドット）を作る
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
          // 背景画像のサイズを設定して、ドットと間隔を制御
          backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}` // 水平の場合：(ドットサイズ + 間隔) x 高さを1つのタイルサイズとする
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`, // 垂直の場合：高さ x (ドットサイズ + 間隔)を1つのタイルサイズとする
          // 背景画像の繰り返し方向を設定
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y", // 水平ならX軸、垂直ならY軸に繰り返す
          // 背景画像の位置を中央に設定
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
