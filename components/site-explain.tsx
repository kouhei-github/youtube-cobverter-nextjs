/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DCSh3z7Lo0T
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import {languageType} from '@/components/YouTube'

export default function SiteExplain(props: {language: languageType}) {
  const { language } = props
  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <div className="flex md:flex-row flex-col justify-center items-center md:space-x-4 space-x-0 space-y-2 md:space-y-0">
        <Card className="w-[350px] bg-[#eff6ff]">
          <CardHeader>
            <ClockIcon class="text-[#60a5fa] w-16 h-16 mx-auto" />
          </CardHeader>
          <CardContent>
            <div className={`md:h-[250px] h-full ${language === "ja" as languageType ? "block" : "hidden"}`}>
              <h3 className="text-lg font-semibold text-center mb-4 h-full md:h-[56px]">最速のスピードと効率</h3>
              <p className="text-sm text-center">
                YouTubeをMP3に変換し、YouTubeをダウンロードする最速のソフトです。
                お気に入りのビデオを即座に変換し、すぐに素晴らしい音楽を楽しむことができます。
              </p>
            </div>
            <div className={`${language === "en" as languageType ? "block" : "hidden"}`}>
              <h3 className="text-lg font-semibold text-center mb-4 h-full md:h-[56px]">Fastest speed and efficiency</h3>
              <p className="text-sm text-center">
                We are the fastest YouTube to MP3 converter and YouTube Downloader.
                We can convert your favorite videos instantly so you can enjoy great music right away.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-[#ffe4e6]">
          <CardHeader>
            <LinkIcon class="text-[#f87171] w-16 h-16 mx-auto"/>
          </CardHeader>
          <CardContent>
            <div className={`md:h-[250px] h-full ${language === "ja" as languageType ? "block" : "hidden"}`}>
              <h3 className="text-lg font-semibold text-center mb-4 h-full md:h-[56px]">最高レベルなオーディオ品質</h3>
              <p className="text-sm text-center">
                KoheiMP3 は YouTube からクリアなオーディオ（最大
                320kbps）をダウンロードすることを化体しているため、中断することなく、曲を楽しむことができます。
                当社の技術は最高レベルにあり、いつでも高いオーディオ品質が保証されます。
              </p>
            </div>
            <div className={`${language === "en" as languageType ? "block" : "hidden"}`}>
              <h3 className="text-lg font-semibold text-center mb-4 h-full md:h-[56px]">Highest level of audio quality</h3>
              <p className="text-sm text-center">
                KoheiMP3 incarnates downloading clear audio from YouTube (up to
                320 kbps) from YouTube so you can enjoy your songs without interruption.
                Our technology is at the highest level and guarantees high audio quality at all times.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-[#ecfdf5]">
          <CardHeader>
            <ShieldCheckIcon class="text-[#34d399] w-16 h-16 mx-auto"/>
          </CardHeader>
          <CardContent>
            <div className={`md:h-[250px] h-full ${language === "ja" as languageType ? "block" : "hidden"}`}>
              <h3 className="text-lg font-semibold text-center mb-4 h-full md:h-[56px]">クロスプラットフォームの互換性</h3>
              <p className="text-sm text-center">
                Windows, Mac, Android, iOS ユーザーのすべてが使用できるため、KoheiMP3 は最高の YouTube MP3 コンバーターおよび
                YouTube ダウンローダーです。
                当社のプラットフォームはあなたのデバイスに完全に対応し、すべてのユーザーにシームレスなエクスペリエンスを保証します。
              </p>
            </div>
            <div className={`${language === "en" as languageType ? "block" : "hidden"}`}>
              <h3 className="text-lg font-semibold text-center mb-4 h-full md:h-[56px]">Cross-platform compatibility</h3>
              <p className="text-sm text-center">
                Windows, Mac, Android, and iOS users can all use KoheiMP3, making it the best YouTube MP3 converter and
                YouTube downloader.
                Our platform is fully compatible with your device, ensuring a seamless experience for all users.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ClockIcon(props: { class: string }) {
  return (
      <svg
          className={props.class}

          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14" />
      </svg>
  )
}


function LinkIcon(props: {class: string}) {
  return (
      <svg
          className={props.class}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
  )
}


function ShieldCheckIcon(props: {class: string}) {
  return (
      <svg
          className={props.class}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
  )
}
