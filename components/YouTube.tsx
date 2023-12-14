"use client"
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ZTelvP8p8lG
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {useState} from 'react'
import {YoutubeMp3Convert} from '@/components/youtube-mp3-convert'
import axios from 'axios'
import {cn} from '@/lib/utils'
import * as React from 'react'
import {convertMp3} from '@/lib/endpoint'

export function YouTube() {
  const [convert, setConvert] = useState(false)
  const [url, setUrl] = useState<string>("")
  const [response, setResponse] = useState<{file_name: string, thumbnail: string, title: string, duration: string, filesize: string}>({file_name: "aa", thumbnail: "aa", title: "aa", duration: "aaa", filesize:"zzz"})

  const [loading, setLoading] = useState(true);

  const upload = async () => {
    if (url === "")return
    setLoading(true)
    setConvert(true)
    const mp3 = await convertMp3(url)
    setResponse(mp3)
    setLoading(false)
  }

  const anotherVideo = (flag: boolean) => {
    setConvert(flag)
  }

  return (
      <div className="container md:px-4 px-0 rounded md:w-2/3 w-[93%] mx-auto">
        <header className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start py-4">
          <h1 className="md:text-3xl text-xl  font-bold text-[#333333]">KoheiMP3</h1>
        </header>

        {convert ? (
            <YoutubeMp3Convert
                duration={response.duration}
                fileSize={response.filesize}
                url={response.file_name}
                thumbnail={response.thumbnail}
                title={response.title}
                videoUrl={url}
                setAnotherVideo={anotherVideo}
                loading={loading}
            />
        ) : (
            <div>
              <section className="mt-8 border border-gray-200 md:p-16 p-5">
                <h2 className="md:text-4xl text-xl font-bold text-center text-[#333333] mb-4">YouTube to MP3
                  Converter</h2>
                <div className="flex justify-center items-center space-x-4">
                  <input
                      type={"text"}
                      className={cn(
                          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      )}
                      value={url}
                      placeholder={"YouTube url is Here"}
                      onChange={(e) => setUrl( e.target.value )}
                  />
                  <Button onClick={() => upload()} className="bg-red-500 text-white hover:bg-red-600">Convert</Button>
                </div>
              </section>
              <main>
                <p className="text-left text-[#333333] my-6 w-11/12 mx-auto">
                  By using our service, <br className={"block md:hidden"}/>you are accepting our
                  <Link className="text-red-500 hover:text-red-600 pl-1" href="#">
                    terms of service
                  </Link>
                  .{"\n                  "}
                </p>
                <section className="md:w-full w-[95%] mx-auto">
                  <h3 className="md:text-3xl text-xl font-bold text-[#333333] mb-4 underline underline-offset-4">Best
                    Free YouTube MP3 Downloader</h3>
                  <p className="text-[#333333] md:leading-[35px] leading-[28px]">
                    OnlyMP3 web app helps you easily convert YouTube videos to MP3 music files with just one click. You
                    don not
                    have to Signup or install any software to perform the conversion. It is as easy as apple pie. We
                    also
                    support
                    an unlimited number of videos to convert into audio files and save them to your Dropbox account. To
                    convert
                    a YT video, you just have to copy and paste the video URL into our YouTube MP3 converter tool and we
                    will
                    auto convert the Video to Audio file, You can also click the Dropbox button to save the file to the
                    cloud
                    platform. Enjoy unlimited conversion of music from youtube in the best available quality. It is a
                    completely
                    free and secure service. Learn more about OnlyMP3 on <Link
                      className={"text-red-500 hover:underline"}
                      href={"https://www.tecklinker.com/"}>https://www.tecklinker.com/</Link>
                  </p>
                </section>
              </main>
            </div>
        )}
      </div>
  )
}
