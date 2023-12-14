/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jnX13xDStme
 */
import { Button } from "@/components/ui/button"
import {languageType} from '@/components/YouTube'
import Link from 'next/link'

export default function DownloadStep(props: {language: languageType}) {
  const { language } = props
  return (
      <div className="container mx-auto w-[98%]">
        <div className="text-center">
          <p className={`${language === "ja" as languageType ? "block" : "hidden"} text-sm text-gray-600`}>
            無料以下のコンバーターに足を引っ張られないようにしてください。KoheiMP3のパワー、利便性、品質を発見し、YouTube動画の楽しめ方に革命をもたらしましょう。今すぐYouTube
            MP4 コンバーターを試して、無限のビデオの可能性の世界を解き放ちましょう。
          </p>
          <p className={`${language === "en" as languageType ? "block" : "hidden"} text-sm text-gray-600`}>
            Don not let the less-than-free converters hold you back, discover the power, convenience, and quality of
            KoheiMP3 and revolutionize the way you enjoy your YouTube videos. Try the YouTube
            MP4 converter and unleash a world of endless video possibilities.
          </p>
          <Link href={"#convert"}>
            <Button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Convert now</Button>
          </Link>
        </div>
        <h2 className={`${language === "ja" as languageType ? "block" : "hidden"} md:text-3xl text-xl font-bold text-center my-12`}>YouTubeをMP4に変換するにはどうすればよいですか？</h2>
        <h2 className={`${language === "en" as languageType ? "block" : "hidden"} md:text-3xl text-xl font-bold text-center my-12`}>How do I convert YouTube to MP4?</h2>
        <div className="w-full flex md:flex-row flex-col justify-center md:space-x-8 space-x-0 space-y-3 md:space-y-0">
          <div className="flex md:flex-col flex-row items-center md:w-1/3 w-full space-x-2">
            <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-4">
              <span className="text-2xl text-blue-800">1</span>
            </div>

            <p className={`md:text-center text-left ml-3 md:ml-0 md:w-full w-10/12 ${language === "ja" as languageType ? "block" : "hidden"}`}>KoheiMP3の検索バーでキーワードまたはYouTube
              URLを検索し、「変換」をクリックします。</p>
            <p className={`md:text-center text-left ml-3 md:ml-0 md:w-full w-10/12 ${language === "en" as languageType ? "block" : "hidden"}`}>Keyword or YouTube in the search bar of KoheiMP3
              URL and click Convert.</p>
          </div>
          <div className="flex md:flex-col flex-row items-center md:w-1/3 w-full space-x-2">
            <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center mb-4">
              <span className="text-2xl text-pink-800">2</span>
            </div>
            <p className={`md:text-center text-left ml-3 md:ml-0 md:w-full w-10/12 ${language === "ja" as languageType ? "block" : "hidden"}`}>必要な形式と品質を選択します。次に、「ダウンロード」ボタンをクリックして変換を開始します。</p>
            <p className={`md:text-center text-left ml-3 md:ml-0 md:w-full w-10/12 ${language === "en" as languageType ? "block" : "hidden"}`}>Select the format and quality you need. Then click the Download button to begin conversion.</p>
          </div>
          <div className="flex md:flex-col flex-row items-center md:w-1/3 w-full space-x-2">
            <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center mb-4">
              <span className="text-2xl text-green-800">3</span>
            </div>
            <p className={`md:text-center text-left ml-3 md:ml-0 md:w-full w-10/12 ${language === "ja" as languageType ? "block" : "hidden"}`}>「ダウンロード」をクリックして、変換されたmp4またはmp3ファイルをコンピュータまたは携帯電話に保存します。</p>
            <p className={`md:text-center text-left ml-3 md:ml-0 md:w-full w-10/12 ${language === "en" as languageType ? "block" : "hidden"}`}>Click Download to save the converted mp4 or mp3 file to your computer or phone.</p>
          </div>
        </div>
      </div>
  )
}
