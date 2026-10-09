// TOKENTRACKER_PLUGIN
const notifyPath = "C:\\Users\\John\\.tokentracker\\bin\\notify.cjs";
export const TokenTrackerPlugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (!event || event.type !== "session.updated") return;
      try {
        if (!notifyPath) return;
        const proc = $`node ${notifyPath} --source=opencode`.quiet();
        if (proc && typeof proc.catch === 'function') proc.catch(() => {});
      } catch (_) {}
    }
  };
};
