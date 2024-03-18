import { inflateEnvironmentSettings } from "./environment-settings";
import { inflateMediaFrame } from "./media-frame";
import { inflateNavMesh } from "./nav-mesh";
import { inflateReflectionProbe } from "./reflection-probe";
import { inflateSimpleWater } from "./simple-water";
import { inflateSpawnPoint } from "./spawn-point";
import { inflateText } from "./text";
import { inflateUVScroll } from "./uv-scroll";
import { inflateWaypoint } from "./waypoint";

export const gltfInflators = new Map();
gltfInflators.set("environment-settings", inflateEnvironmentSettings);
gltfInflators.set("media-frame", inflateMediaFrame);
gltfInflators.set("nav-mesh", inflateNavMesh);
gltfInflators.set("reflection-probe", inflateReflectionProbe);
gltfInflators.set("spawn-point", inflateSpawnPoint);
gltfInflators.set("simple-water", inflateSimpleWater);
gltfInflators.set("text", inflateText);
gltfInflators.set("uv-scroll", inflateUVScroll);
gltfInflators.set("waypoint", inflateWaypoint);
