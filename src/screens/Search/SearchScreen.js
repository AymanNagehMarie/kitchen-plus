import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Theme from '../../constants/Theme';
import { recipes } from '../../data/dataArrays';

export default class SearchScreen extends React.Component {


  constructor(props,navigation) {
    super(props);
    this.state = {
      value: '',
      data: []
    };
  }

    getRecipesByRecipeName(recipeName) {
      if(!recipeName){
        this.setState({
          value: null,
          data: null
        });
        return null;
      }
    const nameUpper = recipeName.toUpperCase();
    const recipesArray = [];
    recipes.map(data => {
      if (data.title.toUpperCase().includes(nameUpper)) {
        recipesArray.push(data);
      }
    });
    this.setState({
      value: recipeName,
      data: recipesArray
    });
    return recipesArray;
  }
  handleSearch = text => {
    var recipeArray1 = getRecipesByRecipeName(text);

    // var aux = recipeArray1
    // var recipeArray = [...new Set(aux)];
    // if (text == '') {
    //   this.setState({
    //     value: text,
    //     data: []
    //   });
    // } else {
     
    // }
  };

  getValue = () => {
    return this.state.value;
  };

  onPressRecipe = item => {
    this.props.navigation.navigate('ItemDetailScreen', {
      screen: 'ItemDetailScreen',
      params: {DetailItem:item },
    }) 
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor={Theme.COLORS.MAJOR} onPress={() => this.onPressRecipe(item)}> 
      <View style={{margin:5,alignContent:"space-between",alignItems:"center",flexDirection:"row",paddingBottom:5,marginVertical:2,borderColor:Theme.COLORS.MAJOR,borderBottomWidth:1}}>
      <Image style={{borderBottomRightRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,borderTopLeftRadius:25,width:35,height:35}} source={{ uri: item.photo_url }}                 resizeMethod={"resize"}
                resizeMode={"cover"} />
        <Text style={{margin:5}}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
  state = {
    search: '',
  };

  updateSearch = (search) => {
    
    console.log(search);
    this.setState({ search });
    this.getRecipesByRecipeName(search);
  };

  render() {
    const { search } = this.state;
    
    return (

      
 
      <View>
       <SearchBar
       autoFocus 
     //  lightTheme="{{color:Theme.COLORS.MAJOR}}"
       placeholderTextColor={Theme.COLORS.MAJOR}
     //  containerStyle={{backgroundColor: 'white',borderColor:"white", borderWidth: 0, borderRadius: 0}}
      // containerStyle={{backgroundColor:Theme.COLORS.MAJOR}}
      // underlayColor="red"
            iconProps={{color:Theme.COLORS.MAJOR}}
            // reverseColor="red"
            // size={100}
            platform="android"
            leftIconContainerStyle={{color:Theme.COLORS.MAJOR}}
            rightIconContainerStyle={{color:Theme.COLORS.MAJOR}}

          placeholder="Type Here..."
           //backgroundColor={Theme.COLORS.MAJOR}
           searchBoxBackgroundColor={Theme.COLORS.MAJOR}
           color={Theme.COLORS.MAJOR}
           shadowColor={Theme.COLORS.MAJOR}
           firstTitleColor={Theme.COLORS.MAJOR}
          onChangeText={this.updateSearch}
           secondTitleColor	={Theme.COLORS.MAJOR}
           iconColor={Theme.COLORS.MAJOR}
          value={search}
        />
      
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
     
          data={this.state.data}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
