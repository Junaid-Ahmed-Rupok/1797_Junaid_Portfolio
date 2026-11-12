import FileSystemBash, {
  FileBash,
  FileSystemType,
  FolderBash,
} from "../fileSystemBash";

export default function show(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "show",
    short: "render markdown (.md) files",
    long: "",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === "-help")) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }
    if (options.find((o) => o === "-a" || o === "-all")) {
      let allStr: string = "";
      const files = fileSystem.goHome().at(-1);
      if (!files) return;

      // Sections in reading order; any other folder is appended after them.
      const order = ["about", "experience", "publications", "projects", "awards", "contact"];
      const folders = (files as FolderBash).children
        .filter((e): e is FolderBash => "children" in e && e.name !== "title")
        .sort((a, b) => {
          const ia = order.indexOf(a.name), ib = order.indexOf(b.name);
          return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
        });

      const collect = (p: (FolderBash | FileBash)[]) => {
        [...p]
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach((e) => {
            if ("data" in e) {
              if (e.name.endsWith(".md")) allStr += e.data;
            } else collect(e.children);
          });
      };

      folders.forEach((folder) => {
        if (folder.name === "projects") allStr += "\n\n\n\n# Projects";
        collect(folder.children);
      });

      print(allStr, true);

      return;
    }

    if (args.length === 0) {
      print(`\nMissing filename`);
      return;
    }
    const file = fileSystem.goto(path.p, args[0])?.at(-1);
    if (!file) {
      print(`\nNo such file or directory`);
      return;
    }

    if (!("data" in file)) {
      print(`\n${file.name}:not a file`);
      return;
    }

    print(file.data, true);
  };
  return { docs, app };
}
