/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VPyK5o8OJh0
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export function YoutubeMp3Convert() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center my-3 space-y-2 sm:space-y-4">
        <p className="text-xs sm:text-sm">
          By using our service, you are accepting our
          <Link className="text-red-600 pl-1" href="#">
            terms of service
          </Link>
          .{"\n              "}
        </p>
        <Card className="w-full pt-3">
          <CardContent>
            <div className="flex flex-col items-center space-y-2 sm:space-y-4">
              <img alt="Video thumbnail" className="aspect-video w-full" height="90" src="https://devio2023-media.developers.io/wp-content/uploads/2019/05/amazon-dynamodb-960x504.png" width="160" />
              <div className="text-center">
                <h2 className="text-lg sm:text-xl font-semibold">Title: Ayra Starr - Rush (Official Music Video)</h2>
                <p className="text-gray-600 text-xs sm:text-base">Duration: 03:06 minutes</p>
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center border-b border-gray-200 py-1 sm:py-2">
                  <span className="text-gray-800 text-sm sm:text-base">Quality</span>
                  <span className="font-medium text-sm sm:text-base">(.mp3) 192kbps</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 py-1 sm:py-2">
                  <span className="text-gray-800 text-sm sm:text-base">File Size</span>
                  <span className="font-medium text-sm sm:text-base">4.3 MB</span>
                </div>
                <div className="flex justify-between items-center py-1 sm:py-2">
                  <span className="text-gray-800 text-sm sm:text-base">Download Link</span>
                  <div className="flex space-x-1 sm:space-x-2">
                    <Button className="bg-red-600 text-white py-2 sm:py-0">Download</Button>
                    <Button className="bg-red-600 text-white py-2 sm:py-0">DropBox</Button>
                  </div>
                </div>
              </div>
              <Button className="bg-red-600 text-white w-full py-2 sm:py-0">Convert another video</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
