import { createHash } from "crypto";
import { webcrypto } from "crypto";

// Polyfill for Node 18 compatibility with Vite's crypto.hash usage
// Vite 7.x expects crypto.hash but older implementations may not have it
// @ts-ignore
if (!global.crypto) {
  global.crypto = webcrypto as any;
}

// @ts-ignore
if (!global.crypto.hash) {
  // @ts-ignore
  global.crypto.hash = function (
    algorithm: string,
    data: BufferSource | string,
    options?: any,
  ) {
    const hash = createHash(algorithm.toLowerCase());
    if (typeof data === "string") {
      hash.update(data, "utf-8");
    } else {
      const buffer = data instanceof ArrayBuffer ? data : data.buffer;
      const uint8Array = new Uint8Array(buffer);
      hash.update(Buffer.from(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength));
    }
    return Promise.resolve(new Uint8Array(hash.digest()));
  };
}

