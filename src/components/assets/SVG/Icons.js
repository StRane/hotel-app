import { AircraftIco } from "./AircraftIco";
import { BookmarkIco } from "./BookmarkIco";
import { BriefcaseIco } from "./BriefcaseIco";
import { ChatIco } from "./ChatIco";
import { ChevronIco } from "./ChevronIco";
import { HelpcIco } from "./HelpcIco";
import { HomeIco } from "./HomeIco";
import { KeyIco } from "./KeyIco";
import { LocationpinIco } from "./LocationpinIco";
import { MagnifyIco } from "./MagnifyIco";
import { MapIco } from "./MapIco";
import { StarIco } from "./StarIco";
import { UserIco } from "./UserIco";

const Icons = (props) => {
  switch (props.name.toLowerCase()) {
    case "aircraft":
      return <AircraftIco {...props} />;
    case "bookmark":
      return <BookmarkIco {...props} />;
    case "briefcase":
      return <BriefcaseIco {...props} />;
    case "chat":
      return <ChatIco {...props} />;
    case "chevron":
      return <ChevronIco {...props} />;
    case "help":
      return <HelpcIco {...props} />;
    case "home":
      return <HomeIco {...props} />;
    case "key":
      return <KeyIco {...props} />;
    case "location":
      return <LocationpinIco {...props} />;
    case "magnify":
      return <MagnifyIco {...props} />;
    case "map":
      return <MapIco {...props} />;
    case "star":
      return <StarIco {...props} />;
    case "user":
      return <UserIco {...props} />;
  }
};

export { Icons };
