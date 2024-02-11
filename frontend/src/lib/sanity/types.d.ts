/// <reference types="@sanity-codegen/types" />

namespace Sanity.HalloFinanzen.Client {
  type Config = {};
}
namespace Sanity.HalloFinanzen.Schema {
  type Author =
    | {
        _id: string;
        _type: "author";
        bio?: Sanity.Ref.Ref_X8PojWpbmweAnDVK;
        image?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type BlockContent =
    | (
        | {
            _key: string;
            _type: "block";
            children: {
              _key: string;
              _type: "span";
              marks?: unknown[];
              text?: string;
            }[];
            markDefs?: unknown[];
            style?: string;
          }
        | {
            asset: Sanity.Reference<{
              _type: "sanity.imageAsset";
              assetId: string;
              extension: string;
              metadata: {
                _type: "sanity.imageMetadata";
                dimensions: {
                  _type: "sanity.imageDimensions";
                  aspectRatio: number;
                  height: number;
                  width: number;
                };
                hasAlpha: boolean;
                isOpaque: boolean;
                lqip: string;
                palette: {
                  _type: "sanity.imagePalette";
                  darkMuted: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  darkVibrant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  dominant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  lightMuted: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  lightVibrant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  muted: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                  vibrant: {
                    _type: "sanity.imagePaletteSwatch";
                    background: string;
                    foreground: string;
                    population: number;
                    title: string;
                  };
                };
              };
              mimeType: string;
              originalFilename: string;
              path: string;
              sha1hash: string;
              size: number;
              uploadId: string;
              url: string;
            }>;
            crop?: {
              _type: "sanity.imageCrop";
              bottom: number;
              left: number;
              right: number;
              top: number;
            };
            hotspot?: {
              _type: "sanity.imageHotspot";
              height: number;
              width: number;
              x: number;
              y: number;
            };
          }
      )[]
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type Geopoint =
    | {
        alt?: number;
        lat?: number;
        lng?: number;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type Post =
    | {
        _id: string;
        _type: "post";
        author?: Sanity.Reference<Sanity.Ref.Ref_Yhy9gNILDEX54VTo>;
        body?: Sanity.Ref.Ref_X8PojWpbmweAnDVK;
        image?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        publishedAt?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityAssetSourceData =
    | {
        id?: string;
        name?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityFileAsset =
    | {
        _id: string;
        _type: "sanity.fileAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_HQPOYVkDRCKgR29w;
        title?: string;
        uploadId?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityImageAsset =
    | {
        _id: string;
        _type: "sanity.imageAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        metadata?: Sanity.Ref.Ref_pCZTdODwVwhNxDlm;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_HQPOYVkDRCKgR29w;
        title?: string;
        uploadId?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityImageCrop =
    | {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityImageDimensions =
    | {
        aspectRatio?: number;
        height?: number;
        width?: number;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityImageHotspot =
    | {
        height?: number;
        width?: number;
        x?: number;
        y?: number;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityImageMetadata =
    | {
        blurHash?: string;
        dimensions?: Sanity.Ref.Ref_bl88g7rYPgHbclt9;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_S8Peld9TWxdavN7e;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
        darkVibrant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
        dominant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
        lightMuted?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
        lightVibrant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
        muted?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
        vibrant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type SanityImagePaletteSwatch =
    | {
        background?: string;
        foreground?: string;
        population?: number;
        title?: string;
      }
    | undefined;
}
namespace Sanity.HalloFinanzen.Schema {
  type Slug =
    | {
        current?: string;
        source?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_bl88g7rYPgHbclt9 = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_HQPOYVkDRCKgR29w = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_pCZTdODwVwhNxDlm = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_bl88g7rYPgHbclt9;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_S8Peld9TWxdavN7e;
  };
}
namespace Sanity.Ref {
  type Ref_S8Peld9TWxdavN7e = {
    darkMuted?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
    darkVibrant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
    dominant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
    lightMuted?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
    lightVibrant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
    muted?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
    vibrant?: Sanity.Ref.Ref_vgLsGCldXOXBn6Ri;
  };
}
namespace Sanity.Ref {
  type Ref_vgLsGCldXOXBn6Ri = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_X8PojWpbmweAnDVK = (
    | {
        _key: string;
        _type: "block";
        children: {
          _key: string;
          _type: "span";
          marks?: unknown[];
          text?: string;
        }[];
        markDefs?: unknown[];
        style?: string;
      }
    | {
        asset: Sanity.Reference<{
          _type: "sanity.imageAsset";
          assetId: string;
          extension: string;
          metadata: {
            _type: "sanity.imageMetadata";
            dimensions: {
              _type: "sanity.imageDimensions";
              aspectRatio: number;
              height: number;
              width: number;
            };
            hasAlpha: boolean;
            isOpaque: boolean;
            lqip: string;
            palette: {
              _type: "sanity.imagePalette";
              darkMuted: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              darkVibrant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              dominant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              lightMuted: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              lightVibrant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              muted: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
              vibrant: {
                _type: "sanity.imagePaletteSwatch";
                background: string;
                foreground: string;
                population: number;
                title: string;
              };
            };
          };
          mimeType: string;
          originalFilename: string;
          path: string;
          sha1hash: string;
          size: number;
          uploadId: string;
          url: string;
        }>;
        crop?: {
          _type: "sanity.imageCrop";
          bottom: number;
          left: number;
          right: number;
          top: number;
        };
        hotspot?: {
          _type: "sanity.imageHotspot";
          height: number;
          width: number;
          x: number;
          y: number;
        };
      }
  )[];
}
namespace Sanity.Ref {
  type Ref_Yhy9gNILDEX54VTo =
    | {
        _id: string;
        _type: "author";
        bio?: Sanity.Ref.Ref_X8PojWpbmweAnDVK;
        image?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
