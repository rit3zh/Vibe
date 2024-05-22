export interface TrendingRoot {
  responseContext: ResponseContext;
  contents: Contents;
  header: Header;
  trackingParams: string;
  maxAgeStoreSeconds: number;
}

interface ResponseContext {
  serviceTrackingParams: ServiceTrackingParam[];
}

interface ServiceTrackingParam {
  service: string;
  params: Param[];
}

interface Param {
  key: string;
  value: string;
}

interface Contents {
  singleColumnBrowseResultsRenderer: SingleColumnBrowseResultsRenderer;
}

interface SingleColumnBrowseResultsRenderer {
  tabs: Tab[];
}

interface Tab {
  tabRenderer: TabRenderer;
}

interface TabRenderer {
  content: Content;
  trackingParams: string;
}

interface Content {
  sectionListRenderer: SectionListRenderer;
}

interface SectionListRenderer {
  contents: Content2[];
  trackingParams: string;
}

interface Content2 {
  gridRenderer: GridRenderer;
}

interface GridRenderer {
  items: Item[];
  trackingParams: string;
}

interface Item {
  musicTwoRowItemRenderer: MusicTwoRowItemRenderer;
}

interface MusicTwoRowItemRenderer {
  thumbnailRenderer: ThumbnailRenderer;
  aspectRatio: string;
  title: Title;
  subtitle: Subtitle;
  navigationEndpoint: NavigationEndpoint3;
  trackingParams: string;
  menu: Menu;
  thumbnailOverlay: ThumbnailOverlay;
}

interface ThumbnailRenderer {
  musicThumbnailRenderer: MusicThumbnailRenderer;
}

interface MusicThumbnailRenderer {
  thumbnail: Thumbnail;
  thumbnailCrop: string;
  thumbnailScale: string;
  trackingParams: string;
}

interface Thumbnail {
  thumbnails: Thumbnail2[];
}

interface Thumbnail2 {
  url: string;
  width: number;
  height: number;
}

interface Title {
  runs: Run[];
}

interface Run {
  text: string;
  navigationEndpoint?: NavigationEndpoint;
}

interface NavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint: BrowseEndpoint;
}

interface BrowseEndpoint {
  browseId: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}

interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}

interface BrowseEndpointContextMusicConfig {
  pageType: string;
}

interface Subtitle {
  runs: Run2[];
}

interface Run2 {
  text: string;
  navigationEndpoint?: NavigationEndpoint2;
}

interface NavigationEndpoint2 {
  clickTrackingParams: string;
  browseEndpoint: BrowseEndpoint2;
}

interface BrowseEndpoint2 {
  browseId: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs2;
}

interface BrowseEndpointContextSupportedConfigs2 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig2;
}

interface BrowseEndpointContextMusicConfig2 {
  pageType: string;
}

interface NavigationEndpoint3 {
  clickTrackingParams: string;
  watchEndpoint?: WatchEndpoint;
  browseEndpoint?: BrowseEndpoint3;
}

interface WatchEndpoint {
  videoId: string;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
}

interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig;
}

interface WatchEndpointMusicConfig {
  musicVideoType: string;
}

interface BrowseEndpoint3 {
  browseId: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs3;
}

interface BrowseEndpointContextSupportedConfigs3 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig3;
}

interface BrowseEndpointContextMusicConfig3 {
  pageType: string;
}

interface Menu {
  menuRenderer: MenuRenderer;
}

interface MenuRenderer {
  items: Item2[];
  trackingParams: string;
  accessibility: Accessibility;
}

interface Item2 {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer;
  menuServiceItemRenderer?: MenuServiceItemRenderer;
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer;
}

interface MenuNavigationItemRenderer {
  text: Text;
  icon: Icon;
  navigationEndpoint: NavigationEndpoint4;
  trackingParams: string;
}

interface Text {
  runs: Run3[];
}

interface Run3 {
  text: string;
}

interface Icon {
  iconType: string;
}

interface NavigationEndpoint4 {
  clickTrackingParams: string;
  shareEntityEndpoint?: ShareEntityEndpoint;
  browseEndpoint?: BrowseEndpoint4;
  modalEndpoint?: ModalEndpoint;
  watchEndpoint?: WatchEndpoint2;
}

interface ShareEntityEndpoint {
  serializedShareEntity: string;
  sharePanelType: string;
}

interface BrowseEndpoint4 {
  browseId: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs4;
}

interface BrowseEndpointContextSupportedConfigs4 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig4;
}

interface BrowseEndpointContextMusicConfig4 {
  pageType: string;
}

interface ModalEndpoint {
  modal: Modal;
}

interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}

interface ModalWithTitleAndButtonRenderer {
  title: Title2;
  content: Content3;
  button: Button;
}

interface Title2 {
  runs: Run4[];
}

interface Run4 {
  text: string;
}

interface Content3 {
  runs: Run5[];
}

interface Run5 {
  text: string;
}

interface Button {
  buttonRenderer: ButtonRenderer;
}

interface ButtonRenderer {
  style: string;
  isDisabled: boolean;
  text: Text2;
  navigationEndpoint: NavigationEndpoint5;
  trackingParams: string;
}

interface Text2 {
  runs: Run6[];
}

interface Run6 {
  text: string;
}

interface NavigationEndpoint5 {
  clickTrackingParams: string;
  signInEndpoint: SignInEndpoint;
}

interface SignInEndpoint {
  hack: boolean;
}

interface WatchEndpoint2 {
  videoId: string;
  playlistId: string;
  params: string;
  loggingContext: LoggingContext;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs2;
}

interface LoggingContext {
  vssLoggingContext: VssLoggingContext;
}

interface VssLoggingContext {
  serializedContextData: string;
}

interface WatchEndpointMusicSupportedConfigs2 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig2;
}

interface WatchEndpointMusicConfig2 {
  musicVideoType: string;
}

interface MenuServiceItemRenderer {
  text: Text3;
  icon: Icon2;
  serviceEndpoint: ServiceEndpoint;
  trackingParams: string;
}

interface Text3 {
  runs: Run7[];
}

interface Run7 {
  text: string;
}

interface Icon2 {
  iconType: string;
}

interface ServiceEndpoint {
  clickTrackingParams: string;
  queueAddEndpoint?: QueueAddEndpoint;
  addToToastAction?: AddToToastAction2;
}

interface QueueAddEndpoint {
  queueTarget: QueueTarget;
  queueInsertPosition: string;
  commands: Command[];
}

interface QueueTarget {
  videoId: string;
  onEmptyQueue: OnEmptyQueue;
}

interface OnEmptyQueue {
  clickTrackingParams: string;
  watchEndpoint: WatchEndpoint3;
}

interface WatchEndpoint3 {
  videoId: string;
}

interface Command {
  clickTrackingParams: string;
  addToToastAction: AddToToastAction;
}

interface AddToToastAction {
  item: Item3;
}

interface Item3 {
  notificationTextRenderer: NotificationTextRenderer;
}

interface NotificationTextRenderer {
  successResponseText: SuccessResponseText;
  trackingParams: string;
}

interface SuccessResponseText {
  runs: Run8[];
}

interface Run8 {
  text: string;
}

interface AddToToastAction2 {
  item: Item4;
}

interface Item4 {
  notificationTextRenderer: NotificationTextRenderer2;
}

interface NotificationTextRenderer2 {
  successResponseText: SuccessResponseText2;
  trackingParams: string;
}

interface SuccessResponseText2 {
  runs: Run9[];
}

interface Run9 {
  text: string;
}

interface ToggleMenuServiceItemRenderer {
  defaultText: DefaultText;
  defaultIcon: DefaultIcon;
  defaultServiceEndpoint: DefaultServiceEndpoint;
  toggledText: ToggledText;
  toggledIcon: ToggledIcon;
  trackingParams: string;
}

interface DefaultText {
  runs: Run10[];
}

interface Run10 {
  text: string;
}

interface DefaultIcon {
  iconType: string;
}

interface DefaultServiceEndpoint {
  clickTrackingParams: string;
  modalEndpoint: ModalEndpoint2;
}

interface ModalEndpoint2 {
  modal: Modal2;
}

interface Modal2 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2;
}

interface ModalWithTitleAndButtonRenderer2 {
  title: Title3;
  content: Content4;
  button: Button2;
}

interface Title3 {
  runs: Run11[];
}

interface Run11 {
  text: string;
}

interface Content4 {
  runs: Run12[];
}

interface Run12 {
  text: string;
}

interface Button2 {
  buttonRenderer: ButtonRenderer2;
}

interface ButtonRenderer2 {
  style: string;
  isDisabled: boolean;
  text: Text4;
  navigationEndpoint: NavigationEndpoint6;
  trackingParams: string;
}

interface Text4 {
  runs: Run13[];
}

interface Run13 {
  text: string;
}

interface NavigationEndpoint6 {
  clickTrackingParams: string;
  signInEndpoint: SignInEndpoint2;
}

interface SignInEndpoint2 {
  hack: boolean;
}

interface ToggledText {
  runs: Run14[];
}

interface Run14 {
  text: string;
}

interface ToggledIcon {
  iconType: string;
}

interface Accessibility {
  accessibilityData: AccessibilityData;
}

interface AccessibilityData {
  label: string;
}

interface ThumbnailOverlay {
  musicItemThumbnailOverlayRenderer: MusicItemThumbnailOverlayRenderer;
}

interface MusicItemThumbnailOverlayRenderer {
  background: Background;
  content: Content5;
  contentPosition: string;
  displayStyle: string;
}

interface Background {
  verticalGradient: VerticalGradient;
}

interface VerticalGradient {
  gradientLayerColors: string[];
}

interface Content5 {
  musicPlayButtonRenderer: MusicPlayButtonRenderer;
}

interface MusicPlayButtonRenderer {
  playNavigationEndpoint: PlayNavigationEndpoint;
  trackingParams: string;
  playIcon: PlayIcon;
  pauseIcon: PauseIcon;
  iconColor: number;
  backgroundColor: number;
  activeBackgroundColor: number;
  loadingIndicatorColor: number;
  playingIcon: PlayingIcon;
  iconLoadingColor: number;
  activeScaleFactor: number;
  buttonSize: string;
  rippleTarget: string;
  accessibilityPlayData: AccessibilityPlayData;
  accessibilityPauseData: AccessibilityPauseData;
}

interface PlayNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint: WatchEndpoint4;
}

interface WatchEndpoint4 {
  videoId: string;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs3;
  params?: string;
}

interface WatchEndpointMusicSupportedConfigs3 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig3;
}

interface WatchEndpointMusicConfig3 {
  musicVideoType: string;
}

interface PlayIcon {
  iconType: string;
}

interface PauseIcon {
  iconType: string;
}

interface PlayingIcon {
  iconType: string;
}

interface AccessibilityPlayData {
  accessibilityData: AccessibilityData2;
}

interface AccessibilityData2 {
  label: string;
}

interface AccessibilityPauseData {
  accessibilityData: AccessibilityData3;
}

interface AccessibilityData3 {
  label: string;
}

interface Header {
  musicHeaderRenderer: MusicHeaderRenderer;
}

interface MusicHeaderRenderer {
  title: Title4;
  trackingParams: string;
}

interface Title4 {
  runs: Run15[];
}

interface Run15 {
  text: string;
}
