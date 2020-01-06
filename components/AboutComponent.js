import React, { Component } from 'react';
import { ScrollView, Text, FlatList, ListItem, View } from 'react-native';
import { PARTNERS } from '../shared/partners';
import { Card } from 'react-native-elements';


// functional component for assignment 1 task 3

function Mission() {

        return (
            <Card
                title= "Our Mission">
                <Text style={{margin: 10}}>
                We present a curated database of the best campsites in the vast woods and 
                backcountry of the World Wide Web Wilderness. We increase access to adventure 
                for the public while promoting safe and respectful use of resources. The expert 
                wilderness trekkers on our staff personally verify each campsite to make sure 
                that they are up to our standards. We also present a platform for campers to 
                share reviews on campsites they have visited with each other.

                </Text>
            </Card>
        );
    }

class About extends Component {
    constructor(props){
        super(props); 
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }
    render() {
        const renderPartner = ({item})=>{
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
         }
            return (
                <View>
                    <ScrollView>
                        <Mission Mission={Mission} />
                
                        <Card
                            title="Community Partners">
                            <FlatList
                            data={this.state.item}
                            renderItem={renderPartner}
                            keyExtractor={item => item.id.toString()}
                            />
                        </Card>
                    </ScrollView>
                </View>
            );
        }
    }
    
    


export default About; 