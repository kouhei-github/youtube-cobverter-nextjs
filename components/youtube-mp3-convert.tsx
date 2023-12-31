/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VPyK5o8OJh0
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import { isMobile } from 'react-device-detect';
import {TypeAnimation} from 'react-type-animation'


export function YoutubeMp3Convert(props: {loading: boolean, duration: string, fileSize: string, url: string, thumbnail: string, title: string, videoUrl: string, setAnotherVideo: (data: boolean) => void}) {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center my-3 space-y-2 sm:space-y-4">
        {props.loading ?
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Please wait a moment.',
                  1100, // wait 1s before replacing "Mice" with "Hamsters"
                  ' We are converting to MP3. ',
                  1100,
                ]}
                style={{color: "#333333", fontSize: "20px"}}
                wrapper="span"
                speed={30}
                repeat={Infinity}
            /> :
            <p className={"text-[20px] text-[#333333]"}>We were able to convert to MP3.</p>
        }

        <Card className="w-full pt-3">
          <CardContent>
            <div className="flex flex-col items-center space-y-2 sm:space-y-4">
              {props.loading ? <Skeleton height={isMobile ? 160 : 150} width={isMobile ? 330 : 600}/> :
                  <img alt="Video thumbnail" className="aspect-video w-full" height="90" src={props.thumbnail}
                       width="160"/>}

              <div className="text-center">
                {props.loading ? <Skeleton height={isMobile ? 30 : 30} width={isMobile ? 330 : 600}/> :
                    <h2 className="text-lg sm:text-xl font-semibold">{props.title}</h2>}
                {props.loading ? <Skeleton height={isMobile ? 30 : 30} width={isMobile ? 330 : 600}/> :
                    <p className="text-gray-600 text-xs sm:text-base">Duration: {props.duration} minutes</p>}
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center border-b border-gray-200 py-1 sm:py-2">
                  <span className="text-gray-800 text-sm sm:text-base">Quality</span>
                  <span className="font-medium text-sm sm:text-base">(.mp3) 192kbps</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 py-1 sm:py-2">
                  <span className="text-gray-800 text-sm sm:text-base">File Size</span>
                  {props.loading ? <Skeleton height={isMobile ? 30 : 30} width={isMobile ? 90 : 90}/> :
                      <span className="font-medium text-sm sm:text-base">{props.fileSize} MB</span>}

                </div>
                <div className="flex justify-between items-center py-1 sm:py-2">
                  <span className="text-gray-800 text-sm sm:text-base">Download Link</span>
                  <div className="flex space-x-1 sm:space-x-2">

                      {props.loading ? <Skeleton height={isMobile ? 40 : 40} width={isMobile ? 90 : 90}/> :
                          <Link href={props.url} download={props.url}>
                          <Button className="bg-red-600 text-white py-2 sm:py-0 animate-pulse">Download</Button>
                          </Link>
                      }

                      {props.loading ? <Skeleton height={isMobile ? 40 : 40} width={isMobile ? 90 : 90}/> :
                          <Link href={props.url} download={props.url}>
                            <Button className="bg-red-600 text-white py-2 sm:py-0">DropBox</Button>
                          </Link>
                      }
                  </div>
                </div>
              </div>
              <Button
                  className="bg-red-600 text-white w-full py-2 sm:py-0"
                  onClick={() => props.loading ? console.log( "wait" ) : props.setAnotherVideo( false )}
              >
                {props.loading ? "Wait For Minutes" : "Convert another video"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
