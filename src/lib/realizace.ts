export type Realizace = {
  id: string;
  src: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait";
  alt: string;
  blurDataURL: string;
};

/**
 * Fotografie realizovaných koupelen.
 * Zdroj: složka `realizace/` v kořeni projektu, převedeno do WebP (199 MB → 2,3 MB).
 */
export const realizace: Realizace[] = [
  {
    "id": "dsc01173",
    "src": "/realizace/dsc01173.webp",
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "alt": "Dvojumyvadlo s černými keramickými mísami, kruhové podsvícené zrcadlo a dubová skříňka na míru",
    "blurDataURL": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADQAQCdASoQAAsAA4BaJYwC7AYv1QYlgAD5eOQ44yfuZjCA3UOSp9yQfnY0a5umA1SjmpiapJhuv8+SPmSMmzWkQ3uL/qeKTh3JRzxweupZfQxppAAqEjLPuqSAAA=="
  },
  {
    "id": "dsc01425",
    "src": "/realizace/dsc01425.webp",
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "alt": "Detail černého designového otopného žebříku na obkladu v imitaci břidlice",
    "blurDataURL": "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoQAAsAA4BaJZwAAxeJZXbBPaQA/t4veW+QNtjh0dzDBsWojih3B48bY7mq6XVkRWeU2j3oAAA="
  },
  {
    "id": "dsc01462",
    "src": "/realizace/dsc01462.webp",
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "alt": "Černá vanová baterie na velkoformátovém obkladu",
    "blurDataURL": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoQAAsAA4BaJZQCdAEO54plAZgAAPiNSInK3pV5ZAK4ERs0dpEfDaWS0HJBsFdAR4V4jMBMQNTky7JrHeqQm42wAAA="
  },
  {
    "id": "dsc01465",
    "src": "/realizace/dsc01465.webp",
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "alt": "Černá vanová baterie s ruční sprchou nad zapuštěnou vanou",
    "blurDataURL": "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoQAAsAA4BaJZQC7ADcICavFxgAAOC01HpOwjl6/WoppDMiL5kh9W7ZLySdFU8WHZ4Rk+0W+4ZE6CV+AAA="
  },
  {
    "id": "dsc01553",
    "src": "/realizace/dsc01553.webp",
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "alt": "Sprchový kout s prosklenou stěnou, závěsné WC a černá volně stojící vana",
    "blurDataURL": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAwAgCdASoQAAsAA4BaJZQCw7D5PVVB9bEwAAD+6a9LirISt4VRPVnktKO5s0s2FcNanOlJUYu1skj7fY8m32zFSNhl8Wl1h7wIqqkq4IrNEkhAAAA="
  },
  {
    "id": "dsc01575",
    "src": "/realizace/dsc01575.webp",
    "width": 1600,
    "height": 2400,
    "orientation": "portrait",
    "alt": "Černá umyvadlová mísa na dubové desce s vysokou stojánkovou baterií",
    "blurDataURL": "data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAAAQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JYwCdABVfpO5bw99eGkATgAD+y6bf0P72xcY4JRhITtautAWCbxMQEZYTDHSrxeAqwijgBHi1MN3m0QWAIxVBOT1R8NnUB8fMxkhyJ8MRYJzivBzQx3dMyjvqH70/lefiULWbWTeuYCj51Iv/0f+mbDTbUGiE2XPgCGAA"
  },
  {
    "id": "dsc01599",
    "src": "/realizace/dsc01599.webp",
    "width": 1600,
    "height": 2400,
    "orientation": "portrait",
    "alt": "Prosklený sprchový kout s podsvícenou výklenkovou policí a oknem",
    "blurDataURL": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoQABgAPu1iqU2ppaOiMAgBMB2JZwAAM7Igk9TfCZh5dagwAP7ELtWWOUXKVQuu9GWO6KLD7TSCs+atlsrbjEcn8FUQgVDZ6BUdIvvusYnKZ49knNQyMyxGUnhl8G9JnzAVwJlpdM00g0Z3iHuHLq4AAAA="
  },
  {
    "id": "dsc01661",
    "src": "/realizace/dsc01661.webp",
    "width": 1600,
    "height": 2400,
    "orientation": "portrait",
    "alt": "Dubová skříňka pod umyvadlem s černou keramickou mísou",
    "blurDataURL": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAACQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JYgCxDIjDMBujet+841SR5Zvl0AAA/u9iiX2G9oxXDCrWBsOa8927u2H1bq7g3enFgxaqB1gNAg+BTPDSC0F902lrQa1yPbgYKaF1gpmuaV2O6XxYtoqpUmYkTBCkAAA="
  },
  {
    "id": "dsc01675",
    "src": "/realizace/dsc01675.webp",
    "width": 1600,
    "height": 2400,
    "orientation": "portrait",
    "alt": "Sprchový kout s kruhovým podsvíceným zrcadlem a dubovou skříňkou",
    "blurDataURL": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQBACdASoQABgAPu1iqU2ppaOiMAgBMB2JYwDE2BeXlrqdPv5pCWHVKY0AAP7s5UdLzMtKUwfN2EjuNXRflyx1CQUIFsLEykOHkcT5XY37Mtk7GKaL/9psx5YYMN6nsdd/RR9n7UXDR91Z5yDi0q56QCgAAA=="
  },
  {
    "id": "dsc01701",
    "src": "/realizace/dsc01701.webp",
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "alt": "Zapuštěná podsvícená nika ve sprchovém koutě s černou podomítkovou baterií",
    "blurDataURL": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoQAAsAA4BaJZQAAcyDFI3FgAD82AEXGMqX5LD0Fsz0ZA/OKHjSr/9yv9meQnDeYK+bQevB5W4X6Z5j5ZACTINZLBjvDHoLe/zA44AA"
  },
  {
    "id": "dsc01753",
    "src": "/realizace/dsc01753.webp",
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "alt": "Sprchový kout, kruhové podsvícené zrcadlo a dubová skříňka s černým umyvadlem",
    "blurDataURL": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoQAAsAA4BaJYwAAjuRj6XCbkAA/upD2RrqKfOAu0kPISNSVY3C92eA93OR4QFA5W4GdvSTnmREc24Sqh2kpXrgAAA="
  },
  {
    "id": "dsc01778",
    "src": "/realizace/dsc01778.webp",
    "width": 1600,
    "height": 2400,
    "orientation": "portrait",
    "alt": "Sprcha s dešťovou hlavicí a dvěma podsvícenými nikami",
    "blurDataURL": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoQABgAPu1kqk4ppaQiMAgBMB2JZQDE2CHcsCHMvXIV0e5IAP4nnWqS3K5HKl0uJ++lIGq30qIuXzHSdegeU0b68dVqCEImqMdVSx+Xep5ZZ1V0FUTncaX44mJVKQbxC63iJ9RUQ3r8GsLq+dnwCMgAAAA="
  }
];
