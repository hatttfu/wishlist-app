export namespace AuthFormNS {
  export type Form = {
    register: Register,
    login: Login
  }

  export type IEnterInfo = {
    title: string,
    subtitle: string,
    switcherText: string
  }

  export type Register = {
    name: {
      value: string,
      props: {
        label: string,
        required: boolean,
        disabled: boolean,
        type: string,
        placeholder: string,
      },
      methods: {
        input: (value: string) => void,
      },
    },
    email: {
      value: string,
      props: {
        label: string,
        required: boolean,
        disabled: boolean,
        type: string,
        placeholder: string,
      },
      methods: {
        input: (value: string) => void,
      }
    },
    password: {
      value: string,
      props: {
        label: string,
        required: boolean,
        disabled: boolean
      },
      methods: {
        input: (value: string) => void,
      }
    }
  }

  export type Login = {
    email: {
      value: string,
      props: {
        label: string,
        required: boolean,
        disabled: boolean,
        type: string,
        placeholder: string
      },
      methods: {
        input: (value: string) => void;
      },
    },
    password: {
      value: string,
      props: {
        label: string,
        required: boolean,
        disabled: boolean
      },
      methods: {
        input: (value: string) => void;
      }
    }
  }
}
