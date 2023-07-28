class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'Useful Text',
      blocks: [
        {
          opcode: 'new',
          blockType: Scratch.BlockType.REPORTER,
          text: 'new line'
        },
   {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [ONE] [TWO] [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'peach'
            }
          }
        }
      ]
    };
  }

  new() {
    return "\n";
  }
  strictlyEquals(args) {
    return args.ONE+args.TWO+args.THREE;
  }
}

Scratch.extensions.register(new HelloWorld());
