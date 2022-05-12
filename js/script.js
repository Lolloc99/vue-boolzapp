dayjs.extend(window.dayjs_plugin_customParseFormat);

const app = new Vue (
    {
        el : "#root",
        // Data
        data : {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            currentContact: 0,
            addNewText: "",
            researchText: "",

        },
        // Methods
        methods : {
            
            formatHour(date) {
                return dayjs(date, 'DD/MM/YYYY HH:mm:ss').format('HH:mm')
            },

            formatDays(date) {
                return dayjs(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY, HH:mm')
            },

            selectChat: function (index) {
                this.currentContact = index
            },

            addNewMessage: function() {
                const newMex = {
                    date: dayjs(),
                    message: this.addNewText,
                    status: 'sent'
                }
                this.contacts[this.currentContact].messages.push(newMex)
                this.addNewText = ""
                setTimeout(this.startTimer, 1000)
            },

            startTimer: function() {
                const newMex = {
                    date: dayjs(),
                    message: "Ok!",
                    status: 'received'
                }
                this.contacts[this.currentContact].messages.push(newMex)
            },

            filterText: function () {
                console.log(this.researchText);
                // Scorro l'array di contacts
                // Per ogni elmento
                // se il text contiene il search,
                // visible diventa true
                // altrimenti
                // visible diventa false
                this.contacts.forEach((item) => {
                    const formattedText = item.name.toLowerCase();
                    const formattedSearch = this.researchText.toLowerCase();
                    if (formattedText.includes(formattedSearch)) {
                        item.visible = true;
                    } else {
                        item.visible = false;
                    }
                });
            },

            deleteBtn: function(array, index) {
                const messagesArray = this.contacts[this.currentContact].messages;
                const messageInArray = messagesArray[index].message;
                array.splice(index, 1)
            },

            infoBtn: function(array, index) {
                const messagesArray = this.contacts[this.currentContact].messages;
                const messageInArray = messagesArray[index].date;
                alert("Data invio messaggio: "+ messageInArray);
            },
        }
    }
)