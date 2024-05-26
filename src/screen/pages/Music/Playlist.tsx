import * as Constants from "@/utils/constants/index";
import { Footer } from "@/components";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PlaylistRenderWithoutHeader } from "./PlaylistRenderWithoutHeader";
import { PlaylistRenderWithHeader } from "./PlaylistRenderWithHeader";
export function Playlist(props: NativeStackHeaderProps) {
  const _key_: string = "header_image_ursl_desktop";
  const headerImage = Constants.PLAYLIST.data.playlistV2.attributes.filter(
    ({ key }) => key === _key_
  );
  return (
    <GestureHandlerRootView>
      {headerImage.length === 0 ? (
        <PlaylistRenderWithoutHeader
          {...props}
          footer={() => <Footer text="You might also like" />}
        />
      ) : (
        <PlaylistRenderWithHeader
          footer={() => <Footer text="You might also like" />}
        />
      )}
    </GestureHandlerRootView>
  );
}
